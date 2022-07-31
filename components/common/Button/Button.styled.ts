import styled from "styled-components";
import { buttonType, sizeType } from "./index";

export const StyledButton = styled.a<{ size: sizeType; type: buttonType }>`
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 1rem 3.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.family.inter};
  transition: background-color 300ms ease, color 300ms ease;
  display: inline-block;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .2);
  text-align: center;
  min-width: ${({ size }) => (size === "l" ? "24rem" : "auto")};

  border: 1px solid ${({ theme, type }) =>
    type === "primary"
      ? theme.colors.primary
      : type === "secondary"
      ? theme.colors.secondary
      : "black"};

  background-color: ${({ theme, type }) =>
    type === "primary"
      ? theme.colors.primary
      : type === "secondary"
      ? theme.colors.secondary
      : theme.colors.black};


  &:hover {
    background-color: ${({ theme, type }) =>
      type === "primary"
        ? theme.colors.primaryLight
        : type === "secondary"
        ? theme.colors.secondaryLight
        : "rgba(0,0,0, .3)"};

    color: ${({ theme, type }) =>
      type === "tertiary" ? theme.colors.white : theme.colors.black}
  }

  &:active {
    background-color: ${({ theme, type }) =>
      type === "primary"
        ? theme.colors.primaryDark
        : type === "secondary"
        ? theme.colors.secondaryDark
        : "rgba(0,0,0, .75)"};
  }
}
`;
