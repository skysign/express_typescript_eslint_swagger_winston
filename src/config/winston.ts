import winston, { format } from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const {
  combine, timestamp, printf, colorize,
} = format;

const customFormat = printf((info) => `${info.timestamp} ${info.level}: ${info.message}`);

// Colorize console log
const consoleOpts = {
  handleExceptions: true,
  level: 'debug',
  format: combine(
    colorize({ all: true }),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
  ),
};

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    customFormat,
  ),
  transports: [
    new winston.transports.Console(consoleOpts),

    // eslint-disable-next-line new-cap
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYYMMDD',
      dirname: './logs',
      filename: 'appName_%DATE%.log',
      maxFiles: 60,
    }),
  ],
});

const stream = {
  write: (message:any) => {
    logger.info(message);
  },
};

export { logger, stream };
