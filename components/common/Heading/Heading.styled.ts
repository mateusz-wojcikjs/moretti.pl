import styled from "styled-components";
import breakpoints from "../../../assets/theme/breakpoints";

interface HeadingProps {
  isSecondary?: boolean;
  isDecorated?: boolean;
  isCenter?: boolean;
}

export const StyledHeading = styled.div<HeadingProps>`
  font-size: ${({ theme }) => theme.font.size.xxl};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.bebasNeue};
  position: relative;

  h1,
  h2,
  h3 {
    color: ${({ theme, isSecondary }) => isSecondary && theme.colors.secondary};
    text-align: ${({ isCenter }) => (isCenter ? "center" : "left")};
  }

  .top {
    color: ${({ theme }) => theme.colors.white};
    display: block;

    @media only screen and ${breakpoints.device.m} {
      font-size: ${({ theme }) => theme.font.size.xxl};
    }
  }

  .bottom {
    color: ${({ theme }) => theme.colors.primary};
    display: block;

    @media only screen and ${breakpoints.device.m} {
      font-size: ${({ theme }) => theme.font.size.xxl};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: 400;
    margin-bottom: 5rem;

    &:after {
      display: ${({ isSecondary }) => (isSecondary ? "block" : "none")};
      content: "";
      background: ${({ theme }) => theme.colors.secondaryAccent};
      height: 3px;
      width: 50px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.xxl};
    font-weight: 300;

    @media only screen and ${breakpoints.device.m} {
      font-size: ${({ theme }) => theme.font.size.xl};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.font.size.l};
  }
`;
