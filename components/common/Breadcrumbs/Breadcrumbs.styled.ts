import styled from "styled-components";

export const StyledBreadcrumbs = styled.div`
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow-breadcrumb {
    margin: -5px 5rem 0;
  }
}

.current-breadcrumb {
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.font.family.bebasNeue};
}

a {
  font-family: ${({ theme }) => theme.font.family.bebasNeue};
`;
