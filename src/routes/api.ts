import express, { Request, Response } from 'express';
import { cloneDeep } from 'lodash';
import { logger } from '../config/winston';

const routerAPIs = express.Router();

/* GET users listing. */
routerAPIs.get('/', (_req: Request, res: Response) => {
  res.send('v1 API');
});

routerAPIs.get('/myapi/:parameterInPath', (req: Request, res: Response) => {
  const resJson:any = {};
  const fieldName:string = req.params.parameterInPath;
  resJson[fieldName] = [`${fieldName}`, 'v1 api', 'get'];

  res.send(JSON.stringify(resJson));
});

routerAPIs.post('/myapi', (req: Request, res: Response) => {
  const reqBody:string = req.body;
  logger.debug(reqBody);

  const tmp:any = JSON.parse('{}');
  const json = cloneDeep(tmp);
  json.status = 'ok';

  res.send(JSON.stringify(json));
});

export default routerAPIs;
