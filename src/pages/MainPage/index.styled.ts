import styled from 'styled-components';

export const StyledMain = styled.main`
  flex: 1;
  padding: 32px 0 0 32px;
  background-color: ${({ theme }) => theme.colors.COLUMN_TITLE};
`;

export const StyledColumnList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
`;
