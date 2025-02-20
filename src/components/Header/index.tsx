import { useState } from 'react';

import { ContentWrapper, HamburgerIcon, Menu, MenuButton, PlusIcon, PlusWrapper, StyledHeader, TitleWrapper } from './index.styled';

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
        <TitleWrapper>Kanban Dashboard</TitleWrapper>
        <HamburgerIcon onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </HamburgerIcon>
        <PlusWrapper onClick={onAddColumn}>
          <PlusIcon />
        </PlusWrapper>
      </ContentWrapper>
      {isMenuOpen && (
        <Menu>
          <MenuButton onClick={onAddColumn}>Добавить колонку</MenuButton>
        </Menu>
      )}
    </StyledHeader>
  );
};

export default Header;
