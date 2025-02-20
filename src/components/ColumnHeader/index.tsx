import { useState } from 'react';

import { DeleteIconWrapper, StyledColumnHeader, TaskCount, Title, TitleEditing } from './index.styled';

interface IColumnHeaderProps {
  title: string;
  taskCount: number;
  color: string;
  onUpdateTitle: (newTitle: string) => void;
  onDeleteColumn: () => void;
}

const ColumnHeader: React.FC<IColumnHeaderProps> = ({ title, taskCount, color, onUpdateTitle, onDeleteColumn }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = () => {
    if (newTitle.trim()) {
      onUpdateTitle(newTitle);
    }
    setIsEditing(false);
  };

  const handleDeleteColumn = () => {
    onDeleteColumn();
  };

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTitleChange();
    }
  };

  return (
    <StyledColumnHeader color={color}>
      <TaskCount color={color}>{taskCount}</TaskCount>
      {isEditing ? (
        <TitleEditing value={newTitle} onChange={handleTitleInputChange} onBlur={handleTitleChange} onKeyDown={handleKeyDown} autoFocus />
      ) : (
        <Title onClick={() => setIsEditing(true)}>{title}</Title>
      )}
      <DeleteIconWrapper onClick={handleDeleteColumn}>×</DeleteIconWrapper>
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
