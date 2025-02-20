import { ContentWrapper, PlusIcon, PlusWrapper, StyledHeader, TitleWrapper } from './index.styled';

interface IHeaderProps {
  onAddColumn: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onAddColumn }) => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <TitleWrapper>Kanban Dashboard</TitleWrapper>
        <PlusWrapper onClick={onAddColumn}>
          <PlusIcon />
        </PlusWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;
