import React, { FC } from "react";
import { StyledText } from "./Text.styled";

const Text: FC<{ children?: string }> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
