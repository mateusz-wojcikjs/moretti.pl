import React, { useEffect } from "react";
import Aos from "aos";
import { StyledTextBox } from "./TextBox.styled";
import AnimatedOnScroll from "../../AnimatedOnScroll";

const TextBox = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <StyledTextBox>
      <AnimatedOnScroll>
        <div className="text-with-image">{children}</div>
      </AnimatedOnScroll>
    </StyledTextBox>
  );
};

export default TextBox;
