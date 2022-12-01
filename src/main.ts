import { logger } from './config/winston';
import app from './app'

async function main() {
  app.listen('2000', () => {
    logger.info('🛡️ Server listening on port: 2000');
  });
}

main();