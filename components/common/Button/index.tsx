import React, { FC, MouseEventHandler } from "react";
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
  handleClick?: MouseEventHandler<HTMLDivElement>;
}

const Button: FC<ButtonProps> = ({
  link,
  type,
  text,
  size = "m",
  handleClick,
}) => {
  return link ? (
    <Link href={link}>
      <StyledButton type={type} size={size} href={link} as="a">
        {text}
      </StyledButton>
    </Link>
  ) : (
    <div onClick={handleClick}>
      <StyledButton type={type} size={size}>
        {text}
      </StyledButton>
    </div>
  );
};

export default Button;
