import { ContentWrapper, PlusIcon, PlusWrapper, StyledHeader, TitleWrapper } from './index.styled';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <TitleWrapper>Kanban Dashboard</TitleWrapper>
        <PlusWrapper>
          <PlusIcon />
        </PlusWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;
