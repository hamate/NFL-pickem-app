import http from 'http';
import logger from './logger';
import app from './app';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, () => logger.info(`Server is listening on ${PORT}`));