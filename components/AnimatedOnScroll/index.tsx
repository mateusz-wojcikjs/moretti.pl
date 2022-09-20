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
      duration: 1000,
    });
  }, []);
  return <div data-aos={`${type || "fade-up"}`}>{children}</div>;
};

export default AnimatedOnScroll;
