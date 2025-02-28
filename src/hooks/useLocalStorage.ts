import { useEffect, useState } from 'react';

import generateUniqueId from '@utils/generateUniqueId';
import getColorForTitle from '@utils/getColorForTitle';
import { theme } from '@constants/styles/theme/theme';

import { IColumn } from '../interfaces/IColumn';
import { ITask } from '../interfaces/ITask';

export const useLocalStorage = (initColumns: IColumn[]) => {
  const [columns, setColumns] = useState<IColumn[]>(() => {
    const storedColumns = localStorage.getItem('kanban-columns');
    return storedColumns ? JSON.parse(storedColumns) : initColumns;
  });

  useEffect(() => {
    localStorage.setItem('kanban-columns', JSON.stringify(columns));
  }, [columns]);

  const addColumn = () => {
    const newColumn: IColumn = {
      id: generateUniqueId(),
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
        column.id === columnId
          ? { ...column, tasks: [...column.tasks, { ...task, id: generateUniqueId(), priority: task.priority || 'Priority' }] }
          : column
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

  const moveTask = (sourceColumnId: number, targetColumnId: number, task: ITask) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === sourceColumnId) {
          return {
            ...column,
            tasks: column.tasks.filter((t) => t.id !== task.id),
          };
        }

        if (column.id === targetColumnId) {
          const newTask = { ...task, id: generateUniqueId() };
          return {
            ...column,
            tasks: [...column.tasks, newTask],
          };
        }

        return column;
      })
    );
  };

  return {
    columns,
    addColumn,
    removeColumn,
    updateColumnTitle,
    addTask,
    deleteTask,
    updateTask,
    moveTask,
  };
};
