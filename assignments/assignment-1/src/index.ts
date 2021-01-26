import http from 'http';
import handler from './routes';

const PORT = 3000;
const server = http.createServer(handler);

server.listen(PORT);
