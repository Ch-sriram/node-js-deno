// Node Imports
import http from 'http';

// Third Party Imports
import express from 'express';

// Local Imports


const app = express(); // 'app' is our gateway to express code. Also, 'app' is a valid request handler.

// Therefore, we can pass in 'app' to http.createServer() method as the callback.
http.createServer(app).listen(3000);

/**
 * Now if we run `npm start`, we'll have a running server which doesn't handle any requests for now.
 * The key characteristic of express.js is that it sets up an easy way to handle requests and send responses.
 */
