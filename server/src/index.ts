import express, { Express } from 'express';
import { PORT } from './constants.js';
import cors from 'cors';
import taskRoutes from './routes/tasks.routes.js';
import { AppDataSource } from '../data/source.js';

const app: Express = express();

app.use(express.json());
app.use(cors);
app.use('/tasks', taskRoutes);

app.get('/me', (req, res) => {
  res.send('me!');
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
