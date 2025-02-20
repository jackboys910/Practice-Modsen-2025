import { ITask } from '../../interfaces/ITask';
import ColumnHeader from '../ColumnHeader';
import TaskList from '../TaskList';
import { AddTaskButton, AddTaskContent, AddTaskTextWrapper, StyledColumn } from './index.styled';

interface IColumnProps {
  column: {
    id: number;
    title: string;
    color: string;
    tasks: ITask[];
  };
  onUpdateTitle: (id: number, newTitle: string) => void;
  onAddTask: (columnId: number, task: ITask) => void;
  onDeleteTask: (columnId: number, taskId: number) => void;
  onUpdateTask: (columnId: number, taskId: number, updatedTask: Partial<ITask>) => void;
  onDeleteColumn: (columnId: number) => void;
}

const Column: React.FC<IColumnProps> = ({ column, onUpdateTitle, onAddTask, onDeleteTask, onUpdateTask, onDeleteColumn }) => {
  const handleAddTask = () => {
    const newTask: ITask = {
      id: Date.now(),
      title: 'Task title',
      description: 'Add description',
      priority: undefined,
    };
    onAddTask(column.id, newTask);
  };

  const handleDeleteColumn = () => {
    onDeleteColumn(column.id);
  };

  return (
    <StyledColumn>
      <ColumnHeader
        title={column.title}
        taskCount={column.tasks.length}
        color={column.color}
        onUpdateTitle={(newTitle) => onUpdateTitle(column.id, newTitle)}
        onDeleteColumn={handleDeleteColumn}
      />
      <TaskList
        tasks={column.tasks}
        onDeleteTask={(taskId) => onDeleteTask(column.id, taskId)}
        onUpdateTask={(taskId, updatedTask) => onUpdateTask(column.id, taskId, updatedTask)}
      />
      <AddTaskButton onClick={handleAddTask}>
        <AddTaskContent>
          <AddTaskTextWrapper color={column.color}>Add task...</AddTaskTextWrapper>
        </AddTaskContent>
      </AddTaskButton>
    </StyledColumn>
  );
};

export default Column;
