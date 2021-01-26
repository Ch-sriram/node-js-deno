/**
 * We need to somehow connect routes.ts to index.ts using named
 * or default exports from routes.ts.
 * 
 * To see the code related to exporting, check ./routes.ts
 */

// const http = require('http'); // legacy import style
// import http = require('http'); // another import style using typescript
import http from 'http';

// two ways to import legacy default exports
// const requestHandler = require('./routes');
// import routes = require('./routes');

// ways to import legacy named exports
// const { handler, someText } = require('./routes');

// ES6 imports
import requestHandler, { someText } from './routes';

const server = http.createServer(requestHandler);
// const server = http.createServer(handler);

console.log(someText);
server.listen(3000);
