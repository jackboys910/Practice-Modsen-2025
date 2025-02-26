import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

import { ITask } from '../../interfaces/ITask';
import {
  DeleteButton,
  Description,
  DescriptionEditing,
  EditButton,
  EditingInfoWrapper,
  Priority,
  PriorityOption,
  PrioritySelect,
  PriorityWrapper,
  SaveButton,
  StyledTask,
  Title,
  TitleEditing,
} from './index.styled';

interface ITaskProps {
  task: ITask;
  onDeleteTask: (taskId: number) => void;
  onUpdateTask: (taskId: number, updatedTask: Partial<ITask>) => void;
  onDragStart: (task: ITask) => void;
}

const Task: React.FC<ITaskProps> = ({ task, onDeleteTask, onUpdateTask, onDragStart }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  const handleSave = () => {
    onUpdateTask(task.id, { title, description, priority });
    setIsEditing(false);
  };

  const handleDragStart = () => {
    onDragStart(task);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'Low' | 'Medium' | 'High' | undefined);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleEditMode = () => {
    setIsEditing(true);
  };

  return (
    <StyledTask draggable onDragStart={handleDragStart}>
      {isEditing ? (
        <>
          <EditingInfoWrapper>
            <PrioritySelect value={priority || ''} onChange={handlePriorityChange}>
              <PriorityOption value=''>No Priority</PriorityOption>
              <PriorityOption value='Low'>Low</PriorityOption>
              <PriorityOption value='Medium'>Medium</PriorityOption>
              <PriorityOption value='High'>High</PriorityOption>
            </PrioritySelect>
            <TitleEditing value={title} onChange={handleTitleChange} placeholder='Task title' />
            <DescriptionEditing value={description} onChange={handleDescriptionChange} placeholder='Add description' />
          </EditingInfoWrapper>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </>
      ) : (
        <>
          <PriorityWrapper>
            <Priority priority={priority}>{priority || 'No Priority'}</Priority>
            <div>
              <EditButton onClick={handleEditMode}>
                <FiEdit size={15} />
              </EditButton>
              <DeleteButton onClick={handleDeleteTask}>×</DeleteButton>
            </div>
          </PriorityWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </>
      )}
    </StyledTask>
  );
};

export default Task;
