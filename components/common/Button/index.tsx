import React, { FC, MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./Button.styled";

export type buttonType = "primary" | "secondary" | "tertiary";
export type sizeType = "l" | "m";

export interface StyledButtonProps {
  size: sizeType;
  type: buttonType;
  children: ReactNode;
}

export interface LinkButtonProps extends StyledButtonProps {
  href: string;
}

export interface ButtonProps extends StyledButtonProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  htmlType: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (
  { type, size, onClick, children, disabled },
  props,
) => {
  return (
    <StyledButton {...props} {...{ onClick, size, type, disabled }}>
      {children}
    </StyledButton>
  );
};

export default Button;
