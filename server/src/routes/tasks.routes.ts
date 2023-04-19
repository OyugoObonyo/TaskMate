import { Request, Response, Router } from 'express';
import { TaskController } from '../contollers/tasks.controller.js';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const taskController = new TaskController();
  const tasks = await taskController.getAll();
  res.send(tasks);
});

export default router;
