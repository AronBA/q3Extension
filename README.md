# Q3 Language Support for VS Code

This Visual Studio Code extension adds grammar and syntax highlighting for the Q3 language and provides Language Server Protocol (LSP) support. The LSP support is powered by a server written in Java.

## Features

- **Q3 Syntax Highlighting**: This extension provides grammar and syntax highlighting for `.q3` files, making it easier to read and write code in Q3.
  
- **Q3 Language Server**: This extension integrates with the Q3 LSP server (written in Java), which offers:
  - Code completion
  - Go to definition
  - Hover information
  - Find references
  - Document formatting
  - Diagnostics (real-time error checking)

## Requirements

- Java Runtime Environment (JRE) is required for running the Q3 LSP server.
  - Make sure Java is installed on your system and available in your system's PATH.

## Installation

1. **Install the Extension**: You can install this extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/) or by searching for "Q3 Language Support" in the Extensions view within VS Code.

2. **Configure LSP**: By default, the extension will start the Q3 LSP server automatically. Ensure that your system has Java installed to run the LSP server properly.

## Usage

1. Open any `.q3` file in VS Code to automatically enable syntax highlighting.
2. For advanced language features (like code completion or error checking), ensure that the LSP server is running by opening a `.q3` file. The server should start automatically and provide real-time support.

## Extension Settings

This extension currently has no additional configuration settings. However, if you'd like to contribute or customize the functionality, feel free to check out the codebase and create a pull request.

## Development

To run the extension in development mode:

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Open the project in VS Code.
4. Press `F5` to open a new VS Code window with the extension loaded.

For contributing to the Q3 LSP (Java), please refer to the LSP repository.

## Known Issues

- Make sure your Java installation is properly configured if the LSP server does not start.
- Some advanced Q3 language features might not be fully supported yet.

## Release Notes

### 1.0.0

- Initial release of Q3 language support.
- Added syntax highlighting for Q3 files.
- Integrated with Q3 LSP server for basic language features.

---

## License

MIT License. See [LICENSE](LICENSE) for more details.

---

## Contribution

Contributions are welcome! Feel free to submit pull requests or open issues for any feature requests or bugs.

---

This README provides a high-level overview of the VS Code extension and instructions for users and developers alike.
