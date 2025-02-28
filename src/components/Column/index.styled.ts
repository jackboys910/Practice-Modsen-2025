import styled from 'styled-components';

import { resolution } from '@constants/resolutions';

export const StyledColumn = styled.div<{ isFirst?: boolean }>`
  width: 308px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  border-radius: ${({ theme }) => theme.borderRadius.PRE_MEDIUM};
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (${resolution.mobile}) {
    width: 100%;
    border-radius: ${({ isFirst, theme }) => (isFirst ? '0' : theme.borderRadius.PRE_MEDIUM)};
  }
`;

export const AddTaskButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.TASK_BORDER};
  border-radius: ${({ theme }) => theme.borderRadius.SMALL};
  background-color: ${({ theme }) => theme.colors.COLUMN_TITLE};
  padding: 12px;
  box-shadow: 0px 4px 8px -2px #1717171a;
`;

export const AddTaskContent = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;
  justify-content: space-between;
`;

export const AddTaskTextWrapper = styled.div<{ color: string }>`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.LARGE};
  background-color: ${({ theme, color }) => theme.colors[color.toUpperCase() + '_BACKGROUND'] || theme.colors.MEDIUM_PRIORITY_BACKGROUND};
  color: ${({ color }) => color};
  padding: 4px 8px 4px 8px;
  font-family: 'PlusJakartaSansSemiBold';
  font-weight: ${({ theme }) => theme.fontWeights.SEMI_BOLD};
  line-height: ${({ theme }) => theme.lineHeight.SMALL};
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  text-align: center;
`;
