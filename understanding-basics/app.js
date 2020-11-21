/**
 * We only know how to work with the file system using fs 
 * module. But how can we start a server?
 * 
 * To start a server, we need to import some kind of 
 * modules. There are some CORE MODULES that ship with NodeJS
 * which are http, https, fs, path & os.
 * 
 * To create a server where we work with HTTP & HTTPS servers,
 * we need any one of these 2 modules. For now, we'll use the
 * `http` module to create a server.
 * 
 * Therefore, `http` module helps us to launch a server, and 
 * also send a request to another server.
 * 
 * `https` will be helpful when we launch a SSL server (SSL => 
 * Secure Socket Layer).
 * 
 * To use the `http` module, we need to import it, as in the 
 * NodeJS runtime, it's not available by default in the global 
 * scope.
 */

const http = require('http');

// require() is the de-facto way to import a package. It takes
// 1 parameter, which is the path to the .js resource we are
// going to import. If we simply have a global package, we 
// import it using the name of the module as seen in line 24.

// But if we don't have a global package, and want to import 
// some local file, then we have to provide a path as follows:
// const resource = require('./someDirectory/someResource');

// Know that the resource we're importing will most probably 
// be a JavaScript file, and so, we need not mention the .js
// extension at the end of the filename, as it is implied.



/**
 * To create a server, we do the following using the `http` 
 * module.
 * 
 * createServer() method's type annotation is the 
 * following:
 *  function createServer(requestListener?: http.RequestListener): http.Server
 * 
 * It means that the createServer method takes another method
 * which is of type RequestListener as seen above. The thing
 * that's returned is an object which is of type Server.
 * 
 * The RequestListener type method, takes in 2 params which are
 * `request` and `response` objects.
 */


// WAY #1: Making a requestListener function and passing its 
// reference to http.createServer method
function requestListener(req, res) {
  // code related to the server
}

http.createServer(requestListener);


// WAY #2: Using an anonymous function which is called directly
// inside the createServer method as seen below.
http.createServer(function (req, res) {
  // code related to the server
})


// WAY #3: Next Gen JS using Arrow Functions
http.createServer((req, res) => {
  // code related to the server
  console.log(req);
});

// Now if we run this file as > `node app.js`, we will see
// nothing in the output because, http.createServer actually
// returns an object of type Server, i.e., we need to store
// the createServer()'s return value in some variable.
const server = http.createServer((req, res) => {
  console.log(req);
})

// to use the server object, we use the listen() method from
// the server object, which takes in some parameters, which are
// of the following type:
//  listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): http.Server
// By default, `port` is 80, `hostname` is localhost.
server.listen(3000);


// Once we run this file using > `node app.js`, at first we
// won't get any output. But later on, whenever we open the
// `localhost:3000` in the browser, we will get an output
// which is th `console.log(req)` from line 85.

// The output is really big. So not showing it here, better.
