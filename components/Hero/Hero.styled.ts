import styled from "styled-components";
import { PositionType } from "./index";
import breakpoints from "assets/theme/breakpoints";

export const StyledHero = styled.header<{
  options: {
    secondary?: boolean;
    textCenter?: boolean;
    position?: PositionType;
    overlay?: boolean;
  };
}>`
  position: relative;
  height: ${({ options }) => (options.secondary ? "48rem" : "80rem")};
  margin-top: ${({ options }) => (options.secondary ? "8rem" : "unset")};
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  //align-items: flex-end;
  //padding-bottom: 10rem;

  &::after {
    content: "";
    display: ${({ options }) => (options.overlay ? "block" : "none")};
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  img {
    object-position: ${({ options: { position } }) => position || "unset"};
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    text-align: ${({ options }) => (options.textCenter ? "center" : "left")};
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
  }

  .hero-content {
    background-color: ${({ theme }) => theme.colors.white};
    display: inline-block;
    padding: 2.5rem 5rem 2.5rem 0;
    position: relative;

    &::after {
      position: absolute;
      height: 100%;
      width: 100%;
      content: "";
      background-color: inherit;
      left: -100%;
      top: 0;
    }

    .decorated {
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      color: ${({ theme }) => theme.colors.black};
      text-shadow: none;
    }

    h1 {
      color: ${({ theme }) => theme.colors.black};
      @media only screen and ${breakpoints.device.m} {
        font-size: ${({ theme }) => theme.font.size.xxxl};
      }
    }
  }
`;
