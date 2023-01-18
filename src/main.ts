import { logger } from './config/winston';
import app from './app';

async function main() {
  app.listen('3000', () => {
    logger.info('🛡️ Server listening on port: 3000');
  });
}

main();
