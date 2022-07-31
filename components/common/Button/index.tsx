import React, { FC } from "react";
import { StyledButton } from "./Button.styled";
import Link from "next/link";

export type buttonType = "primary" | "secondary" | "tertiary";
export type sizeType = "l" | "m";

export interface ButtonProps {
  link: string;
  type: buttonType;
  text: string;
  size?: sizeType;
}

const Button: FC<ButtonProps> = ({ link, type, text, size = "m" }) => {
  return (
    <Link href={link}>
      <StyledButton type={type} size={size}>
        {text}
      </StyledButton>
    </Link>
  );
};

export default Button;
