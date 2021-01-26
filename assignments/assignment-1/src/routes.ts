/**
 * 
 */
import { IncomingMessage, ServerResponse } from 'http';

export const HTMLStart = `
<html>
<head>
  <title>Assignment I</title>
</head>
<body>
`;
export const HTMLEnd = `
</body>
</html>
`;

export const method = { 'GET': 'GET', 'POST': 'POST' };

const handler = (req: IncomingMessage, res: ServerResponse) => {
  const URL = req.url;
  const METHOD = req.method;
  const hoursNow = new Date().getHours();
  const inputName = 'username';
  
  if (URL === '/' && METHOD === method.GET) {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      ${HTMLStart}
        <h3>Hey there, ${
          hoursNow > 4 && hoursNow <= 12
            ? 'Good Morning!' : hoursNow > 12 && hoursNow <= 16
              ? 'Good Afternoon!' : 'Good Evening!'
        }</h3>
        <h6>Date: ${new Date().toLocaleString()}</h6>
        <form method="POST" action="/create-user">
          <input type="text" name="${inputName}"/>
          <button type="submit">Send</button>
        </form>
      ${HTMLEnd}
    `);
    return res.end(`URL: ${URL}, METHOD: ${METHOD}`);
  }

  if (URL === '/users' && METHOD === method.GET) {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      ${HTMLStart}
        <h5>A list of users</h5>
        <ul>
          <li>Ramki</li>
          <li>Padma</li>
          <li>Shiva</li>
          <li>Sriram</li>
          <li>Swaroop</li>
        </ul>
      ${HTMLEnd}
    `);
    return res.end(`URL: ${URL}, METHOD: ${METHOD}`);
  }

  if (URL === '/create-user' && METHOD === method.POST) {
    const body: any[] = [];
    req.on('data', (chunk: any) => body.push(chunk));
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(`Input received from '/' from input - ${inputName}: ${parsedBody.split('=')[1]}`);
      return res.end(`URL: ${URL}, METHOD: ${METHOD}`);
    });
  }

  // res.end('OK'); called automatically
};

export default handler;
