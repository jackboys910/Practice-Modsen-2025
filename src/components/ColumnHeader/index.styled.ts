import styled from 'styled-components';

export const StyledColumnHeader = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadius.EXTRA_LARGE};
  padding: 8px 12px 8px 8px;
`;

export const TaskCount = styled.div<{ color: string }>`
  width: 33px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.COLUMN_TITLE};
  font-family: 'PlusJakartaSansSemiBold';
  font-size: ${({ theme }) => theme.fontSizes.PRE_MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.SEMI_BOLD};
  line-height: ${({ theme }) => theme.lineHeight.PRE_MEDIUM};
  border-radius: ${({ theme }) => theme.borderRadius.LARGE};
  color: ${({ color }) => color};
  padding: 6px 12px 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-family: 'PlusJakartaSansBold';
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.BOLD};
  line-height: ${({ theme }) => theme.lineHeight.MEDIUM};
  color: ${({ theme }) => theme.colors.COLUMN_TITLE};
  flex: 1;
  letter-spacing: -0.7%;
`;

export const TitleEditing = styled.input`
  font-family: 'PlusJakartaSansBold';
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.BOLD};
  line-height: ${({ theme }) => theme.lineHeight.MEDIUM};
  color: ${({ theme }) => theme.colors.COLUMN_TITLE};
  flex: 1;
  letter-spacing: -0.7%;
  outline: none;
  border: none;
  background-color: transparent;
  margin: 15px 0 15px -2px;
  width: 191px;
`;

export const DeleteIconWrapper = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  position: relative;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSizes.LARGE};
  color: ${({ theme }) => theme.colors.COLUMN_TITLE};
  position: relative;
  top: -5px;
`;
