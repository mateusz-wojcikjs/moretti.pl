import styled from "styled-components";
import Link from "next/link";
import { InnerWrapper } from "../Layout.styled";
import breakpoints from "assets/theme/breakpoints";

const shadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";

export const StyledNavbar = styled.nav<{
  isScrolled: boolean;
  isHomePage: boolean;
}>`
  height: 8rem;
  background: ${({ theme, isScrolled, isHomePage }) =>
    isScrolled || !isHomePage ? theme.colors.gray : "transparent"};
  grid-column: 1 / -1;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: ${({ isScrolled, isHomePage }) =>
    isScrolled || !isHomePage ? shadow : "none"};
  transition: background-color 300ms ease;
`;

export const NavigationContainer = styled(InnerWrapper)`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 5rem;

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: column;

    margin-left: 0;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledNavItem = styled.li`
  font-size: ${({ theme }) => theme.font.size.s};

  &:not(:last-child) {
    margin-right: 3.2rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: ${({ theme }) => theme.font.size.m};
    height: 6rem;
    &:not(:last-child) {
      margin-right: 0;
    }

    a {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
  }
`;

export const StyledNavLink = styled(Link)``;

export const MaskNav = styled.div<{ isOpen: boolean }>`
  @media only screen and ${breakpoints.device.sm} {
    background: ${({ theme }) => theme.colors.gray};
    overflow-y: scroll;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 8rem;
    height: 100vh;
    width: 100%;
    transition: transform 200ms ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
`;
