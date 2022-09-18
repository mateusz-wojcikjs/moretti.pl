import React, { useEffect } from "react";
import Aos from "aos";
import { StyledTextBox } from "./TextBox.styled";

const TextBox = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <StyledTextBox>
      <div data-aos="fade-up">{children}</div>
    </StyledTextBox>
  );
};

export default TextBox;
