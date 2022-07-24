import React, { FC } from "react";
import { StyledButton } from "./Button.styled";
import Link from "next/link";

export type buttonType = "primary" | "secondary" | "tertiary";

export interface ButtonProps {
  link: string;
  type: buttonType;
  text: string;
}

const Button: FC<ButtonProps> = ({ link, type, text }) => {
  return (
    <Link href={link}>
      <StyledButton type={type}>{text}</StyledButton>
    </Link>
  );
};

export default Button;
