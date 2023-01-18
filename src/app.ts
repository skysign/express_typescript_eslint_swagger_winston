import express, { Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// import bodyParser from 'body-parser';

import morgan from 'morgan';
import { stream } from './config/winston';
import routerAPIs from './routes/api';

const swaggerDocument = require('./swagger.json');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'yarn express typescript eslint swagger',
      version: '0.1.0',
      description:
        'yarn express typescript eslint swagger',
      license: {
        name: '',
        url: '',
      },
      contact: {
        name: 'YETES',
        email: 'skysign@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: ['./routes/api.js'],
};

const specs = swaggerJsdoc(options);
const app = express();
app.use(morgan('combined', { stream }));

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs),
  swaggerUi.setup(swaggerDocument),
);

app.use('/api/v1', routerAPIs);

app.get('/', (_req: Request, res: Response) => {
  res.send('my index');
});

app.get('/welcome', (_req: Request, res: Response) => {
  res.send('welcome!');
});

export default app;
