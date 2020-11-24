const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req); // `req` is a request object, which is a really complex object.
  /**
   * Request Object has a lot of fields inside it, but there 
   * are only a few number of fields that are used frequently 
   * and they're `request.url`, `request.method` and 
   * `request.headers`.
   * 
   * When we log them in the console, we'll see what the output
   * is, which is as follows:
   */
  console.log('URL:', req.url);
  console.log('METHOD:', req.method);
  console.log('HEADERS:', req.headers);
});

server.listen(3000);

// OUTPUTS
// -------


/** `localhost:3000` */

// URL: /
// METHOD: GET
// HEADERS: {
//   host: 'localhost:3000',
//   connection: 'keep-alive',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7,te;q=0.6,la;q=0.5'
// }



/** `localhost:3000/home` */ // URL is changed here to `/home`

// URL: /home
// METHOD: GET
// HEADERS: {
//   host: 'localhost:3000',
//   connection: 'keep-alive',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7,te;q=0.6,la;q=0.5'
// }
