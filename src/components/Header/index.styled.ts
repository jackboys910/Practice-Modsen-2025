import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 104px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  display: flex;
  align-items: center;
  padding: 0 32px;
`;

export const ContentWrapper = styled.div`
  width: 941px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const TitleWrapper = styled.div`
  flex: 1;
  height: 38px;
  font-family: 'PlusJakartaSansExtraBold';
  font-size: ${({ theme }) => theme.fontSizes.LARGE};
  font-weight: ${({ theme }) => theme.fontWeights.EXTRA_BOLD};
  line-height: ${({ theme }) => theme.lineHeight.LARGE};
  color: ${({ theme }) => theme.colors.PRIMARY_TITLE};
`;

export const PlusWrapper = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  border: 1px solid ${({ theme }) => theme.colors.ADD_COLUMN_BORDER};
  border-radius: ${({ theme }) => theme.borderRadius.MEDIUM};
  position: relative;
`;

export const PlusIcon = styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 18.75px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.ADD_COLUMN_BUTTON};
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 18.75px;
    background-color: ${({ theme }) => theme.colors.ADD_COLUMN_BUTTON};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
