# Details on NodeJS

Contains all the important and necessary details to know what Node JS is, and how to use it as a backend environment.

## What is `Node.js`?

- NodeJS is a JavaScript Runtime which uses the **[V8 Engine](https://chromium.googlesource.com/v8/v8.git)** (developed by the Google Chrome team).
  - What do we mean by JavaScript Runtime?
    - JS is a programming language which we in the browser to manipulate our DOM or the document which was loaded in the browser, and so, JS is a crucial language when it comes to building interfaces in the browser. However, JS is not limited to just building the UI.
    - NodeJS is built on JS, *i.e.*, NodeJS adds some features to JS (which the vanilla JS inside browser is not capable of doing &mdash; due to security reasons) and puts into a different environment, *i.e.*, in its purest form, putting JS inside a Server a.k.a `JavaScript on the Server`.
    - In theory, we can use NodeJS and use JavaScript on any machine (not only on the server), like a normal programming language. And so, because of this, we can use JS outside of the browser.
  - V8 Engine is written in C++, that compiles the JS code into Machine Code.
  - The features of NodeJS (that aren't available for in-browser JS) are for example, working with the local filesystem using the `fs` module (Opening, Reading & Deleting Files are not possible in the browser), Usage of streams using the `stream` module, etc.

## Software Requirements

- NodeJS Runtime should be installed. Can be found by going here: <https://nodejs.org/en/>. After installation is complete, please check whether NodeJS is installed using the cmd/terminal by typing in the command &mdash; `node -v`. We can open the NodeJS environment in the terminal using the command `node` (and press "Enter"), which will open NodeJS in Interactive Mode.
- VSCode (free code editor available for all the OS'): <https://code.visualstudio.com/>.

## Compiler Details

- To check the version of Node JS installed in your system, in the terminal, type in the command: `node -v` or `node`, to know the version or run the Node Runtime respectively.
- To compile a JavaScript File, we can use the Node JS Runtime to compile using the command: `node <file-name>.js`. Example: `node first-app.js`. The Node JS compiler will compile it using the V8 Engine and show the output in the terminal.
