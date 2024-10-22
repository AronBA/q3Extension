import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    const serverModule = context.asAbsolutePath(path.join('server', 'launcher-1.0-SNAPSHOT-jar-with-dependencies.jar'));

    const debugOptions = { execArgv: ['-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005'] };

    const serverOptions: ServerOptions = {
        run: { command: 'java', args: ['-jar', serverModule], transport: TransportKind.stdio },
        debug: { command: 'java', args: ['-jar', serverModule], transport: TransportKind.stdio }
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'q3' }],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
        }
    };

    client = new LanguageClient(
        'languageServerExample',
        'Language Server Example',
        serverOptions,
        clientOptions
    );

    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}