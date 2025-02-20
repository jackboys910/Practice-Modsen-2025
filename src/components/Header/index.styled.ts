import styled from 'styled-components';

import { resolution } from '../../constants/resolutions';

export const StyledHeader = styled.header`
  width: 100%;
  height: 104px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  display: flex;
  align-items: center;
  padding: 0 32px;
  position: relative;

  @media (${resolution.mobile}) {
    padding: 0 16px;
    justify-content: space-between;
  }
`;

export const ContentWrapper = styled.div`
  width: 941px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media (${resolution.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const TitleWrapper = styled.div`
  flex: 1;
  height: 38px;
  font-family: 'PlusJakartaSansExtraBold';
  font-size: ${({ theme }) => theme.fontSizes.LARGE};
  font-weight: ${({ theme }) => theme.fontWeights.EXTRA_BOLD};
  line-height: ${({ theme }) => theme.lineHeight.LARGE};
  color: ${({ theme }) => theme.colors.PRIMARY_TITLE};

  @media (${resolution.mobile}) {
    display: none;
  }
`;

export const PlusWrapper = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  border: 1px solid ${({ theme }) => theme.colors.ADD_COLUMN_BORDER};
  border-radius: ${({ theme }) => theme.borderRadius.MEDIUM};
  position: relative;

  @media (${resolution.mobile}) {
    display: none;
  }
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

  @media (${resolution.mobile}) {
    display: none;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media (${resolution.mobile}) {
    width: 24px;
    height: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-left: 11px;

    div {
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.INITIAL_DESCRIPTION};
    }
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 104px;
  left: 0;
  width: 250px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  box-shadow: 2px 0 8px #00000033;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MenuButton = styled.button`
  font-family: 'PlusJakartaSansSemiBold';
  border-radius: ${({ theme }) => theme.borderRadius.MEDIUM};
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  background-color: ${({ theme }) => theme.colors.ADD_COLUMN_BUTTON};
  width: 100%;
  padding: 12px;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.ADD_COLUMN_BUTTON_HOVER};
  }
`;
