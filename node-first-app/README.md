# Details on NodeJS

Contains all the important and necessary details to know what Node JS is, and how to use it as a backend environment.

## What is `Node.js`?

- NodeJS is a JavaScript Runtime which uses the **[V8 Engine](https://chromium.googlesource.com/v8/v8.git)** (developed by the Google Chrome team).
  - What do we mean by JavaScript Runtime?
    - JS is a programming language which we use in the browser to manipulate our DOM or the document which was loaded in the browser, and so, JS is a crucial language when it comes to building interfaces in the browser. However, JS is not limited to just building the UI.
    - NodeJS is built on JS, *i.e.*, NodeJS adds some features to JS (which the vanilla JS inside browser is not capable of doing &mdash; due to security reasons) and puts into a different environment, *i.e.*, in its purest form, putting JS inside a Server a.k.a `JavaScript on the Server`.
    - In theory, we can use NodeJS and use JavaScript on any machine (not only on the server), like a normal programming language. And so, because of this, we can use JS outside of the browser.
  - V8 Engine is written in C++, that compiles the JS code into Machine Code.
  - The features of NodeJS (that aren't available for in-browser JS) are for example, working with the local filesystem using the `fs` module (Opening, Reading & Deleting Files are not possible in the browser), Usage of streams using the `stream` module, etc.

## Software Requirements

- NodeJS Runtime should be installed. Can be found by going here: <https://nodejs.org/en/>. After installation is complete, please check whether NodeJS is installed using the cmd/terminal by typing in the command &mdash; `node -v`. We can open the NodeJS environment in the terminal using the command `node` (and press "Enter"), which will open NodeJS in Interactive Mode.
- VSCode (free code editor available for all the OS'): <https://code.visualstudio.com/>.

## Compiler Details

- To check the version of Node JS installed in your system, in the terminal, type in the command: `node -v` or `node`, to know the version or run the Node Runtime respectively.
- To compile a JavaScript File, we can use the Node JS Runtime from the cmd/terminal, as follows: `node <file-name>.js`. Example: `node first-app.js`. The Node JS compiler will compile it using the V8 Engine and show the output in the terminal.
- We can run NodeJS in two modes:
  - REPL Mode: Stands for **Read Evaluate Print Loop**, *i.e.*, *Read the Input*, *Evaluate the Input*, *Print the Output* & *Loop back to Reading the Input*. We can use REPL mode to test new feature or use it as a playground to understand how a snippet of code works. We can use it in a terminal by simply typing in `node` command and pressing enter. Once exited from the REPL mode, the code is gone, because it is not saved anywhere in the hard-drive, it's simply stored in the RAM.
  - File Mode: To compile and run a JS file, we use NodeJS in the terminal with the command `node <file-name>.js`. Examples: `node first-app.js`, `node second-app.js`, etc. We can save the code we write in files, and so, we can obviously see why this mode is preferred more. This mode is used for Real Apps.

## Role & Usage of NodeJS

- We know that we use NodeJS to run JS on a server and to write server side code in JS. And so, the full picture is the following:
  - **Client**: Users use the client (can be a computer, mobile device, etc) which can be anything with a browser (and also mobile apps). And so, in the browser, we can make use of HTML, CSS & JavaScript to create webpages.
  - **Servers, Request & Response**: The client visits a page which is served by a **Server** (fancy word for some computer running on the internet, which has a specific IP associated with a domain name, which is automatically resolved for us), and on that Server, we want to execute some code that does something with the incoming Request and returns a **Response**. Often, but not always, the response is some kind of an HTML Page, or some JSON/XML Data.
  - **Details on Server**: On the server, we typically perform tasks that we can't (*or don't, due to security/performance reasons*) perform from inside the browser (***browser is the client***). For example, from the server, we connect to a **Database** (*to fetch and store data*), we perform User **Authentication** (*which is obviously one thing we cannot perform at client-side, as that's a **security** concern*), we perform **Validation** for various tasks (like *Input Data*) because the browsers can easily be tricked as the users can easily edit the client-side code in the browser, and in-general, we've our **Business Logic** on the server, which is everything the user shouldn't see and which also takes too much time to run on the client-side machine, which only has the browser (in worst case scenario). And so, this is where we use **NodeJS**, which is also JS code, not on the browser (client), but on the server. ![Role & Usage of NodeJS](./images/Role%20&%20Usage%20of%20NodeJS.png)
  - Side Note: NodeJS is NOT limited to running code on a server. What do we mean by that? Let's see:
    - NodeJS is a JS Runtime, and so, we can use NodeJS to simply compile single-standalone JS files for general programming purposes.
    - We can also use NodeJS for Utility Scripts & Build Tools for React, Angular, Vue, etc. Whenever we use these frameworks, we actually use NodeJS indirectly for a lot of the build processing these frameworks need.
  - **Major Role of NodeJS: Web Development**
    - Running a Server: Create Server to Listen to Incoming Requests.
    - Business Logic: Handle Requests, Validate Input, Connect to Database.
    - Responses: Return Responses (Rendered HTML, JSON, XML, Files, etc).
  - NodeJS Alternatives
    - Python as a Backend can be used along with two popular frameworks called Flask & Django.
    - PHP can also be used along with its popular framework called Laravel, or we can simply use vanilla PHP.
    - Ruby on Rails, C# (ASP.NET), GO, Java (Spring/SpringBoot/Hibernate), Scala (Play), etc.
