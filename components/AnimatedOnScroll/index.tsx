import React, { useEffect } from "react";
import Aos from "aos";

const AnimatedOnScroll = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: string;
}) => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);
  return <div data-aos={`${type || "fade-in"}`}>{children}</div>;
};

export default AnimatedOnScroll;
