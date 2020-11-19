# Proof of Concept: NodeJS & Deno

Repository contains concepts and code related to Node JS (Vanilla Node, Express Framework, REST APIs, GraphQL, Websockets & more) & Deno.

- What is NodeJS?
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
