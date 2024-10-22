"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensionInstance = exports.Q3Extension = void 0;
const path = require("path");
const vscode = __importStar(require("vscode"));
const vscode_languageclient_1 = require("vscode-languageclient");
const node_1 = require("vscode-languageclient/node");
const outputChannel = vscode.window.createOutputChannel("Q3");
const LS_LAUNCHER_MAIN = "StdioLauncher";
class Q3Extension {
    languageClient;
    context;
    setContext(context) {
        this.context = context;
    }
    async init() {
        try {
            let serverOptions = getServerOptions();
            let clientId = "q3-vscode-lsclient";
            let clientName = "Q3 LS Client";
            let clientOptions = {
                documentSelector: [{ scheme: "file", language: "q3" }],
                outputChannel: outputChannel,
                revealOutputChannelOn: vscode_languageclient_1.RevealOutputChannelOn.Never,
            };
            this.languageClient = new node_1.LanguageClient(clientId, clientName, serverOptions, clientOptions);
            const disposeDidChange = this.languageClient.onDidChangeState((stateChangeEvent) => {
                if (stateChangeEvent.newState === node_1.State.Stopped) {
                    vscode.window.showErrorMessage("Failed to initialize the extension");
                }
                else if (stateChangeEvent.newState === node_1.State.Running) {
                    vscode.window.showInformationMessage("Extension initialized successfully!");
                }
            });
            let disposable = this.languageClient.start().then(() => {
                disposeDidChange.dispose();
            });
            this.context.subscriptions.push(disposable);
        }
        catch (exception) {
            return Promise.reject("Extension error!");
        }
    }
}
exports.Q3Extension = Q3Extension;
function getServerOptions() {
    const PROJECT_HOME = "/home/aron/Development/Java/LSP4Q3";
    const LS_LIB = "launcher/language_server_lib/*";
    const LS_HOME = path.join(PROJECT_HOME, LS_LIB);
    const JAVA_HOME = process.env.JAVA_HOME;
    let executable = path.join(String(JAVA_HOME), "bin", "java");
    let args = ["-cp", LS_HOME];
    let serverOptions = {
        command: executable,
        args: [...args, LS_LAUNCHER_MAIN],
        options: {},
    };
    return serverOptions;
}
exports.extensionInstance = new Q3Extension();
//# sourceMappingURL=extension.js.map