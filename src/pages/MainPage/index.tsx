import { useEffect, useState } from 'react';

import Column from '../../components/Column';
import Header from '../../components/Header';
import { theme } from '../../constants/styles/theme/theme';
import { ITask } from '../../interfaces/ITask';
import getColorForTitle from '../../utils/getColorForTitle';
import { StyledColumnList, StyledMain } from './index.styled';

interface IColumn {
  id: number;
  title: string;
  color: string;
  tasks: ITask[];
  isDefaultTitle: boolean;
}

function MainPage() {
  const [columns, setColumns] = useState<IColumn[]>(() => {
    const storedColumns = localStorage.getItem('kanban-columns');
    return storedColumns
      ? JSON.parse(storedColumns)
      : [
          { id: 1, title: 'To Do', color: theme.colors.MEDIUM_PRIORITY, tasks: [], isDefaultTitle: false },
          { id: 2, title: 'In Progress', color: theme.colors.OK_PRIORITY, tasks: [], isDefaultTitle: false },
          { id: 3, title: 'Done', color: theme.colors.LOW_PRIORITY, tasks: [], isDefaultTitle: false },
        ];
  });

  useEffect(() => {
    localStorage.setItem('kanban-columns', JSON.stringify(columns));
  }, [columns]);

  const addColumn = () => {
    const newColumn: IColumn = {
      id: Date.now(),
      title: 'Column Title',
      color: theme.colors.INITIAL_COLUMN_BACKGROUND,
      tasks: [],
      isDefaultTitle: true,
    };
    setColumns([...columns, newColumn]);
  };

  const removeColumn = (columnId: number) => {
    setColumns((prevColumns) => prevColumns.filter((column) => column.id !== columnId));
  };

  const updateColumnTitle = (id: number, newTitle: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === id) {
          const updatedColumn = { ...column, title: newTitle };
          if (column.isDefaultTitle && newTitle !== 'Column Title') {
            updatedColumn.color = getColorForTitle();
            updatedColumn.isDefaultTitle = false;
          }
          return updatedColumn;
        }
        return column;
      })
    );
  };

  const addTask = (columnId: number, task: ITask) => {
    setColumns(
      columns.map((column) =>
        column.id === columnId ? { ...column, tasks: [...column.tasks, { ...task, priority: task.priority || 'Priority' }] } : column
      )
    );
  };

  const deleteTask = (columnId: number, taskId: number) => {
    setColumns(
      columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== taskId),
            }
          : column
      )
    );
  };

  const updateTask = (columnId: number, taskId: number, updatedTask: Partial<ITask>) => {
    setColumns(
      columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: column.tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task)),
            }
          : column
      )
    );
  };

  return (
    <>
      <Header onAddColumn={addColumn} />
      <StyledMain>
        <StyledColumnList>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              onUpdateTitle={updateColumnTitle}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
              onUpdateTask={updateTask}
              onDeleteColumn={removeColumn}
            />
          ))}
        </StyledColumnList>
      </StyledMain>
    </>
  );
}

export default MainPage;
