import { ITask } from './ITask';

export interface IColumn {
  id: number;
  title: string;
  color: string;
  tasks: ITask[];
  isDefaultTitle: boolean;
}
