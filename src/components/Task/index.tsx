import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

import { CROSS_ICON, PRIORITIES, PRIORITY_OPTIONS, SAVE_TEXT } from '@constants/editTaskText';

import { ITask } from '../../interfaces/ITask';
import {
  ButtonWrapper,
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

interface IOption {
  value: string;
  label: string;
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
              {PRIORITY_OPTIONS.map((option: IOption) => (
                <PriorityOption key={option.value} value={option.value}>
                  {option.label}
                </PriorityOption>
              ))}
            </PrioritySelect>
            <TitleEditing value={title} onChange={handleTitleChange} placeholder='Task title' />
            <DescriptionEditing value={description} onChange={handleDescriptionChange} placeholder='Add description' />
          </EditingInfoWrapper>
          <SaveButton onClick={handleSave}>{SAVE_TEXT}</SaveButton>
        </>
      ) : (
        <>
          <PriorityWrapper>
            <Priority priority={priority}>{priority || PRIORITIES.NO_PRIORITY}</Priority>
            <ButtonWrapper>
              <EditButton onClick={handleEditMode}>
                <FiEdit size={15} />
              </EditButton>
              <DeleteButton onClick={handleDeleteTask}>{CROSS_ICON}</DeleteButton>
            </ButtonWrapper>
          </PriorityWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </>
      )}
    </StyledTask>
  );
};

export default Task;
