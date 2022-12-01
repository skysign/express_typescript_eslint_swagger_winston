import winston, { format } from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const {
  combine, timestamp, colorize,
} = format;

// Colorize console log
const consoleOpts = {
  handleExceptions: true,
  level: 'debug',
  format: combine(
    colorize({ all: true }),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
  ),
};

const enumerateErrorFormat = format(info => {
  // if (info.message instanceof Error) {
  //   info.message = Object.assign({
  //     message: info.message.message,
  //     stack: info.message.stack
  //   }, info.message);
  // }

  if (info instanceof Error) {
    return Object.assign({
      message: info.message,
      stack: info.stack
    }, info);
  }

  return info;
});

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    enumerateErrorFormat(),
    format.json()
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
