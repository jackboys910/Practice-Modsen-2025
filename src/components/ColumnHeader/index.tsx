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

  const handleDeleteColumnClick = () => {
    onDeleteColumn();
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
      <DeleteIconWrapper onClick={handleDeleteColumnClick}>×</DeleteIconWrapper>
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
