import React, { useEffect, useState } from "react";
import Logo from "components/layout/Logo";
import { NavigationContainer, StyledNavbar } from "./Navbar.styled";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const isHomePage = router.route === "/";
  const windowGlobal = typeof window !== "undefined" && window;

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (windowGlobal) {
      windowGlobal.onscroll = () => {
        windowGlobal.scrollY >= 100
          ? setIsScrolled(true)
          : setIsScrolled(false);
      };
    }
  }, [windowGlobal]);

  return (
    <StyledNavbar isScrolled={isScrolled} isHomePage={isHomePage}>
      <NavigationContainer>
        <Logo />
        <Menu isOpen={isOpen} onClick={onClick} />
        <BurgerMenu onClick={onClick} isOpen={isOpen} />
      </NavigationContainer>
    </StyledNavbar>
  );
};

export default Navbar;
