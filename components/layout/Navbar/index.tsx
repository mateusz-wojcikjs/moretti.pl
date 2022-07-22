import React, { useState } from "react";
import Logo from "components/layout/Logo";
import { NavigationContainer, StyledNavbar } from "./Navbar.styled";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar>
      <NavigationContainer>
        <Logo />
        <Menu isOpen={isOpen} />
        <BurgerMenu onClick={onClick} isOpen={isOpen} />
      </NavigationContainer>
    </StyledNavbar>
  );
};

export default Navbar;
