import { AppDataSource } from '../../data/source.js';
import { Task } from '../entities/tasks.entity.js';

export class TaskController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

  public async getAll(): Promise<Task[]> {
    let tasks: Task[] = [];
    try {
      tasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
      return tasks;
    } catch (err) {
      console.log(err);
      return tasks;
    }
  }
}
