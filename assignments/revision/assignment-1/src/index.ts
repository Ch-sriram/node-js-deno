import http, { IncomingMessage, ServerResponse } from 'http';
import { HTTP_METHODS, ROUTE_CONSTANTS, HTML_CONSTANTS, getGreeting } from './helpers';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const { method, url } = req;
  if (Boolean(method) && Boolean(url)) {
    if (method === HTTP_METHODS.GET && url === ROUTE_CONSTANTS.root) {
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        ${HTML_CONSTANTS.start}
          <h3>Hey there, ${getGreeting()}</h3>
          Date: ${new Date().toLocaleString()}<br />
          <form method="${HTTP_METHODS.POST}" action="${ROUTE_CONSTANTS.createUser}">
            <input type="text" name="favouriteLanguage" placeholder="What's your favourite programming language?" />
            <button type="submit">Send</button>
          </form>
          <br /><br />
        ${HTML_CONSTANTS.end}
      `);
      return res.end(`url: "${url}"; method: ${method};`);
    }

    if (method === HTTP_METHODS.GET && url === ROUTE_CONSTANTS.users) {
      res.setHeader('Content-Type', 'text/html');
      res.write(`
      ${HTML_CONSTANTS.start}
        <h3>List of favourite programming languages</h3>
        ${HTML_CONSTANTS.list}
      ${HTML_CONSTANTS.end}`);
      return res.end(`url: "${url}"; method: ${method};`);
    }

    if (method === HTTP_METHODS.POST && url === ROUTE_CONSTANTS.createUser) {
      const body: Array<any> = [];
      req.on('data', (chunk: any) => body.push(chunk));
      return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(`Received Input from '${ROUTE_CONSTANTS.root}': ${parsedBody.split('=').join(' = ')}`);
        res.writeHead(302, `Redirecting to '${ROUTE_CONSTANTS.root}' from '${url}'`, { Location: ROUTE_CONSTANTS.root });
        return res.end(`url: "${url}"; method: ${method};`);
      });
    }

    // res.end('OK'); // called automatically
  }
});

server.listen(3000);
