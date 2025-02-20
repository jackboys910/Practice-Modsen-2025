import { ITask } from '../../interfaces/ITask';
import Task from '../Task';
import { StyledTaskList } from './index.styled';

interface ITaskListProps {
  tasks: ITask[];
  onDeleteTask: (taskId: number) => void;
  onUpdateTask: (taskId: number, updatedTask: Partial<ITask>) => void;
}

const TaskList: React.FC<ITaskListProps> = ({ tasks, onDeleteTask, onUpdateTask }) => {
  return (
    <StyledTaskList>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} />
      ))}
    </StyledTaskList>
  );
};

export default TaskList;
