import { useState } from 'react';

import Column from '@components/Column';
import Header from '@components/Header';
import initialColumns from '@constants/initialColumns';
import { useLocalStorage } from '@hooks/useLocalStorage';

import { IColumn } from '../../interfaces/IColumn';
import { ITask } from '../../interfaces/ITask';
import { StyledColumnList, StyledMain } from './index.styled';

const MainPage: React.FC = () => {
  const { columns, addColumn, removeColumn, updateColumnTitle, addTask, deleteTask, updateTask, moveTask } =
    useLocalStorage(initialColumns);
  const [draggedTask, setDraggedTask] = useState<{ columnId: number; task: ITask } | null>(null);

  const handleDragStart = (columnId: number, task: ITask) => {
    setDraggedTask({ columnId, task });
  };

  const handleDrop = (targetColumnId: number) => {
    if (draggedTask) {
      const { columnId: sourceColumnId, task } = draggedTask;

      if (sourceColumnId !== targetColumnId) {
        moveTask(sourceColumnId, targetColumnId, task);
      }
    }
    setDraggedTask(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header onAddColumn={addColumn} />
      <StyledMain>
        <StyledColumnList>
          {columns.map((column: IColumn, index: number) => (
            <Column
              key={column.id}
              column={column}
              isFirst={index === 0}
              onUpdateTitle={updateColumnTitle}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
              onUpdateTask={updateTask}
              onDeleteColumn={removeColumn}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            />
          ))}
        </StyledColumnList>
      </StyledMain>
    </>
  );
};

export default MainPage;
