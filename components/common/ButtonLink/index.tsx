import React, { FC } from "react";
import { StyledButtonLink } from "../Button/Button.styled";
import { LinkButtonProps } from "../Button";

const ButtonLink: FC<LinkButtonProps> = ({ children, href, type, size }) => {
  return (
    <StyledButtonLink {...{ href, type, size }}>{children}</StyledButtonLink>
  );
};

export default ButtonLink;
