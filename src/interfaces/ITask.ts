export interface ITask {
  id: number;
  title: string;
  description: string;
  priority?: 'Low' | 'Medium' | 'High' | 'Priority';
}
