import { MaskNav, StyledMenu, StyledNavItem } from "../Navbar.styled";
import Link from "next/link";
import React from "react";

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <MaskNav isOpen={isOpen}>
      <StyledMenu>
        <StyledNavItem>
          <Link href={"/"}>Strona główna</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href={"/o-nas"}>O nas</Link>
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
