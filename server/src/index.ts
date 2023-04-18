import express, { Express, Request, Response } from 'express';
import { PORT } from './constants.ts';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}!`);
});
