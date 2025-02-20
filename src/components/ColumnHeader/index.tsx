import { motion } from 'framer-motion';
import { useState } from 'react';
import * as Yup from 'yup';

import { titleValidationSchema } from '../../utils/validation/titleValidation';
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
  const [titleError, setTitleError] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const validateTitle = async (value: string) => {
    try {
      await titleValidationSchema.validate(value);
      setTitleError(null);
      return true;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setTitleError(error.message);
      }
      return false;
    }
  };

  const handleTitleChange = async () => {
    const isValid = await validateTitle(newTitle);
    if (isValid && newTitle.trim()) {
      onUpdateTitle(newTitle);
      setIsEditing(false);
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 300);
    }
  };

  const handleDeleteColumn = () => {
    onDeleteColumn();
  };

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);

    if (titleError) {
      validateTitle(e.target.value);
    }
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
        <motion.div animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.3 }}>
          <TitleEditing
            value={newTitle}
            onChange={handleTitleInputChange}
            onBlur={handleTitleChange}
            onKeyDown={handleKeyDown}
            titleError={!!titleError}
            autoFocus
          />
        </motion.div>
      ) : (
        <Title onClick={() => setIsEditing(true)}>{title}</Title>
      )}
      <DeleteIconWrapper onClick={handleDeleteColumn}>×</DeleteIconWrapper>
    </StyledColumnHeader>
  );
};

export default ColumnHeader;
