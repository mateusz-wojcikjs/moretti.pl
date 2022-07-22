import React from "react";
import { StyledBurgerMenu } from "./BurgerMenu.styled";

interface BurgerMenuProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
}

const Index: React.FC<BurgerMenuProps> = ({ onClick, isOpen }) => {
  return (
    <StyledBurgerMenu onClick={onClick} isOpen={isOpen}>
      <span />
      <span />
      <span />
    </StyledBurgerMenu>
  );
};

export default Index;
