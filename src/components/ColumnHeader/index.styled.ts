import styled from 'styled-components';

import { resolution } from '@constants/resolutions';

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

export const TitleEditing = styled.input<{ titleError: boolean }>`
  font-family: 'PlusJakartaSansBold';
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  font-weight: ${({ theme }) => theme.fontWeights.BOLD};
  line-height: ${({ theme }) => theme.lineHeight.MEDIUM};
  color: ${({ titleError, theme }) => (titleError ? theme.colors.HIGH_PRIORITY : theme.colors.COLUMN_TITLE)};
  flex: 1;
  letter-spacing: -0.7%;
  outline: none;
  border: none;
  background-color: transparent;
  margin: 15px 0 15px -2px;
  width: 191px;

  @media (${resolution.mobile}) {
    width: 80vw;
  }

  @media (max-width: 650px) {
    width: 78vw;
  }

  @media (max-width: 600px) {
    width: 76vw;
  }

  @media (max-width: 550px) {
    width: 74vw;
  }

  @media (max-width: 500px) {
    width: 71vw;
  }

  @media (max-width: 450px) {
    width: 68vw;
  }

  @media (max-width: 410px) {
    width: 65vw;
  }
`;

export const DeleteIconWrapper = styled.button`
  width: 26.2px;
  height: 24px;
  border: none;
  position: relative;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSizes.LARGE};
  color: ${({ theme }) => theme.colors.COLUMN_TITLE};
  top: -5px;
`;

export const ErrorWrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  font-family: 'PlusJakartaSansRegular';
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  position: absolute;
  top: 35px;
  left: -25px;
  width: 250px;
`;
