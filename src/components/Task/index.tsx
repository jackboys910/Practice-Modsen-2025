import { useState } from 'react';

import { ITask } from '../../interfaces/ITask';
import {
  DeleteButton,
  Description,
  DescriptionEditing,
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

  return (
    <StyledTask draggable onDragStart={() => onDragStart(task)}>
      {isEditing ? (
        <>
          <EditingInfoWrapper>
            <PrioritySelect value={priority || ''} onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High' | undefined)}>
              <PriorityOption value=''>No Priority</PriorityOption>
              <PriorityOption value='Low'>Low</PriorityOption>
              <PriorityOption value='Medium'>Medium</PriorityOption>
              <PriorityOption value='High'>High</PriorityOption>
            </PrioritySelect>
            <TitleEditing value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Task title' />
            <DescriptionEditing value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Add description' />
          </EditingInfoWrapper>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </>
      ) : (
        <>
          <PriorityWrapper>
            <Priority priority={priority} onClick={() => setIsEditing(true)}>
              {priority || 'No Priority'}
            </Priority>
            <DeleteButton onClick={() => onDeleteTask(task.id)}>×</DeleteButton>
          </PriorityWrapper>
          <Title onClick={() => setIsEditing(true)}>{title}</Title>
          <Description onClick={() => setIsEditing(true)}>{description}</Description>
        </>
      )}
    </StyledTask>
  );
};

export default Task;
