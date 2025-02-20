import styled from 'styled-components';

export const StyledErrorBoundaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 20px;
`;

export const StyledErrorMessage = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.LARGE};
  color: ${({ theme }) => theme.colors.ERROR_TEXT};
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledErrorDetails = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  text-align: center;
  margin-bottom: 20px;
  max-width: 500px;
`;

export const StyledRetryButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.COLUMN_TITLE};
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px #0000001a;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px #00000033;
  }

  &:active {
    background-color: #004085;
    transform: translateY(0);
    box-shadow: 0 3px 5px #00000026;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #268fff80;
  }
`;
