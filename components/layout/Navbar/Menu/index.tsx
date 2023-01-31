import { MaskNav, StyledMenu, StyledNavItem } from "../Navbar.styled";
import Link from "next/link";
import React from "react";

interface MenuProps {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClick }) => {
  return (
    <MaskNav isOpen={isOpen}>
      <StyledMenu onClick={onClick}>
        <StyledNavItem>
          <Link href={"/o-firmie"}>O nas</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href={"/oferta"}>Oferta</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href={"/kontakt"}>Kontakt</Link>
        </StyledNavItem>
      </StyledMenu>
    </MaskNav>
  );
};

export default Menu;
