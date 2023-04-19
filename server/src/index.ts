import express, { Express, Request, Response } from 'express';
import { PORT } from './constants.js';
import { DataSource } from 'typeorm';
import cors from 'cors';

const app: Express = express();
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: '../data/db.sqlite',
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
});

app.use(express.json());
app.use(cors);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
