import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum Priority {
  high = 'high',
  normal = 'normal',
  low = 'low',
}

enum Status {
  todo = 'todo',
  inProgress = 'inProgress',
  completed = 'completed',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  date: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'text',
    default: Priority.normal,
  })
  priority: Priority;

  @Column({
    type: 'text',
    default: Status.todo,
  })
  status: Status;
}
