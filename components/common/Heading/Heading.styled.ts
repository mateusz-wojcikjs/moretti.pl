import styled from "styled-components";

export const StyledHeading = styled.div`
  font-size: ${({ theme }) => theme.font.size.xxl};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.bebasNeue};
  position: relative;

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
    font-weight: 400;
    margin-bottom: 5rem;

    &:after {
      content: "";
      background: ${({ theme }) => theme.colors.secondaryAccent};
      height: 3px;
      width: 50px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;
