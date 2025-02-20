import { useState } from 'react';

import { AddIcon, AddIconWrapper, StyledColumnHeader, TaskCount, Title, TitleEditing } from './index.styled';

interface IColumnHeaderProps {
  title: string;
  taskCount: number;
  color: string;
  onUpdateTitle: (newTitle: string) => void;
  onAddTask: () => void;
}

const ColumnHeader: React.FC<IColumnHeaderProps> = ({ title, taskCount, color, onUpdateTitle, onAddTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = () => {
    if (newTitle.trim()) {
      onUpdateTitle(newTitle);
    }
    setIsEditing(false);
  };

  const handleAddTaskClick = () => {
    onAddTask();
  };

  return (
    <StyledColumnHeader color={color}>
      <TaskCount color={color}>{taskCount}</TaskCount>
      {isEditing ? (
        <TitleEditing
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleTitleChange}
          onKeyDown={(e) => e.key === 'Enter' && handleTitleChange()}
          autoFocus
        />
      ) : (
        <Title onClick={() => setIsEditing(true)}>{title}</Title>
      )}
      <AddIconWrapper onClick={handleAddTaskClick}>
        <AddIcon />
      </AddIconWrapper>
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
