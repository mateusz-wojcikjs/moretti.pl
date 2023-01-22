import React, { FC } from "react";
import { StaticImageData } from "next/image";
import Background from "../common/Background";
import { StyledHero } from "./Hero.styled";
import { InnerWrapper } from "components/layout/Layout.styled";
import AnimatedOnScroll from "../AnimatedOnScroll";

export type TitleType = {
  textTop: string;
  textBottom?: string;
};

export type PositionType = "center" | "top" | "bottom";

interface HeroProps {
  img: StaticImageData | string;
  children: React.ReactNode;
  secondary?: boolean;
  textCenter?: boolean;
  position?: PositionType;
  overlay?: number;
}

const Hero: FC<HeroProps> = ({
  img,
  children,
  secondary,
  textCenter,
  position,
  overlay,
}) => {
  const options = {
    secondary,
    textCenter,
    position,
    overlay,
  };
  return (
    <StyledHero options={options}>
      <Background img={img} />
      <InnerWrapper>
        <AnimatedOnScroll>{children}</AnimatedOnScroll>
      </InnerWrapper>
    </StyledHero>
  );
};

export default Hero;
