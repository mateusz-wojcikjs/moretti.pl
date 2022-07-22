import styled from "styled-components";
import Link from "next/link";
import { Container } from "../Layout.styled";
import breakpoints from "../../../assets/theme/breakpoints";

export const StyledNavbar = styled.nav`
  height: 8rem;
  background: ${({ theme }) => theme.colors.gray};
  grid-column: 1 / -1;
  z-index: 100;
`;

export const NavigationContainer = styled(Container)`
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
    top: 8rem;
    right: 0;
    height: 100vh;
    width: 100%;
    transition: transform 200ms ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
`;
