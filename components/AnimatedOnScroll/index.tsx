import React, { useEffect } from "react";
import Aos from "aos";
import { AnimationOnScrollProps } from "./interface";

const AnimatedOnScroll: React.FC<AnimationOnScrollProps> = ({
  children,
  type = "fade-in",
}: AnimationOnScrollProps): JSX.Element => {
  useEffect((): void => {
    Aos.init({
      duration: 500,
      offset: 100,
    });
  }, [type]);
  return <div data-aos={type}>{children}</div>;
};

export default AnimatedOnScroll;
