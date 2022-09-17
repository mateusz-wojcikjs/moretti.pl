import React, { FC } from "react";
import { StyledButton } from "./Button.styled";
import Link from "next/link";

export type buttonType = "primary" | "secondary" | "tertiary";
export type sizeType = "l" | "m";

export interface ButtonProps {
  link?: string;
  type: buttonType;
  text: string;
  size?: sizeType;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Button: FC<ButtonProps> = ({ link, type, text, size = "m" }) =>
  link ? (
    <Link href={link}>
      <StyledButton type={type} size={size}>
        {text}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton type={type} size={size}>
      {text}
    </StyledButton>
  );

export default Button;
