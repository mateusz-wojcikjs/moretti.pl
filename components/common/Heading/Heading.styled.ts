import styled from "styled-components";

export const StyledHeading = styled.div`
  font-size: ${({ theme }) => theme.font.size.xxl};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.bebasNeue};

  .top {
    color: ${({ theme }) => theme.colors.white};
    display: block;
  }

  .bottom {
    color: ${({ theme }) => theme.colors.primary};
    display: block;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;
