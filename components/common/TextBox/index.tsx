import React from "react";
import { StyledTextBox } from "./TextBox.styled";

const TextBox = ({ children }: { children: React.ReactNode }) => {
  return <StyledTextBox>{children}</StyledTextBox>;
};

export default TextBox;
