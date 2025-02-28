import { useState } from 'react';

import { HEADER_TEXT } from '@constants/headerText';

import {
  ContentWrapper,
  HamburgerIcon,
  Menu,
  MenuButton,
  OneStripe,
  PlusIcon,
  PlusWrapper,
  StyledHeader,
  TitleWrapper,
} from './index.styled';
interface IHeaderProps {
  onAddColumn: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onAddColumn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <ContentWrapper>
        <TitleWrapper>{HEADER_TEXT.TITLE}</TitleWrapper>
        <HamburgerIcon onClick={toggleMenu}>
          <OneStripe />
          <OneStripe />
          <OneStripe />
        </HamburgerIcon>
        <PlusWrapper onClick={onAddColumn}>
          <PlusIcon />
        </PlusWrapper>
      </ContentWrapper>
      {isMenuOpen && (
        <Menu>
          <MenuButton onClick={onAddColumn}>{HEADER_TEXT.ADD_COLUMN}</MenuButton>
        </Menu>
      )}
    </StyledHeader>
  );
};

export default Header;
