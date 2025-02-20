import styled from 'styled-components';

export const StyledTask = styled.div`
  background-color: ${({ theme }) => theme.colors.COLUMN_TITLE};
  border-radius: ${({ theme }) => theme.borderRadius.SMALL};
  box-shadow: 0px 2px 4px -2px #1717171a;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EditingInfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const Priority = styled.span<{ priority?: 'Low' | 'Medium' | 'High' | 'Priority' }>`
  font-family: 'PlusJakartaSansSemiBold';
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  font-weight: ${({ theme }) => theme.fontWeights.SEMI_BOLD};
  line-height: ${({ theme }) => theme.lineHeight.SMALL};
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.LARGE};
  align-self: flex-start;
  letter-spacing: -0.5%;
  background-color: ${({ priority, theme }) => {
    switch (priority) {
      case 'Low':
        return theme.colors.LOW_PRIORITY_BACKGROUND;
      case 'Medium':
        return theme.colors.MEDIUM_PRIORITY_BACKGROUND;
      case 'High':
        return theme.colors.HIGH_PRIORITY_BACKGROUND;
      default:
        return theme.colors.MEDIUM_PRIORITY_BACKGROUND;
    }
  }};
  color: ${({ priority, theme }) => {
    switch (priority) {
      case 'Low':
        return theme.colors.LOW_PRIORITY;
      case 'Medium':
        return theme.colors.MEDIUM_PRIORITY;
      case 'High':
        return theme.colors.HIGH_PRIORITY;
      default:
        return theme.colors.INITIAL_PRIORITY;
    }
  }};
`;

export const PrioritySelect = styled.select`
  font-family: 'PlusJakartaSansSemiBold';
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  font-weight: ${({ theme }) => theme.fontWeights.SEMI_BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY_TITLE};
  padding: 4px;
  border-radius: 0;
  width: 100%;
  background-color: transparent;
`;

export const PriorityOption = styled.option`
  font-family: 'PlusJakartaSansSemiBold';
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  font-weight: ${({ theme }) => theme.fontWeights.SEMI_BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY_TITLE};
`;

export const Title = styled.h4`
  font-family: 'PlusJakartaSansBold';
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.BOLD};
  line-height: ${({ theme }) => theme.lineHeight.MEDIUM};
  color: ${({ theme }) => theme.colors.PRIMARY_TITLE};
  letter-spacing: -0.7%;
  margin: 0;
  word-wrap: break-word;
`;

export const TitleEditing = styled.input`
  font-family: 'PlusJakartaSansBold';
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.BOLD};
  line-height: ${({ theme }) => theme.lineHeight.MEDIUM};
  color: ${({ theme }) => theme.colors.PRIMARY_TITLE};
  letter-spacing: -0.7%;
  flex: 1;
  outline: none;
  border: none;
`;

export const Description = styled.p`
  font-family: 'PlusJakartaSansRegular';
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.REGULAR};
  line-height: ${({ theme }) => theme.lineHeight.EXTRA_MEDIUM};
  color: ${({ theme }) => theme.colors.INITIAL_DESCRIPTION};
  letter-spacing: 0%;
  margin: 0;
  word-wrap: break-word;
`;

export const DescriptionEditing = styled.textarea`
  font-family: 'PlusJakartaSansRegular';
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.REGULAR};
  line-height: ${({ theme }) => theme.lineHeight.EXTRA_MEDIUM};
  color: ${({ theme }) => theme.colors.INITIAL_DESCRIPTION};
  letter-spacing: 0%;
  resize: none;
  outline: none;
  border: none;
  min-height: 60px;
  max-height: 200px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.SCROLL_BACKGROUND};
    border-radius: 10px;
    transition: background-color 0.3s ease;
    cursor: grab;
  }

  &::-webkit-scrollbar-thumb:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.SCROLL_HOVER};
  }
`;

export const SaveButton = styled.button`
  font-family: 'PlusJakartaSansMedium';
  font-size: ${({ theme }) => theme.fontSizes.PRE_MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.MEDIUM};
  line-height: ${({ theme }) => theme.lineHeight.PRE_MEDIUM};
  color: ${({ theme }) => theme.colors.INITIAL_DESCRIPTION};
  letter-spacing: -0.6%;
  border: none;
  background-color: transparent;
  text-align: left;
  padding: 0;
`;

export const PriorityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  bottom: 4px;
  color: ${({ theme }) => theme.colors.HIGH_PRIORITY};
  &:hover {
    color: red;
  }
`;
