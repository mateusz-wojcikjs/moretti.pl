import React, { FC } from "react";
import { StaticImageData } from "next/image";
import HeroBackground from "./HeroBackground/HeroBackground";
import { HeroContainer, StyledHero } from "./Hero.styled";

interface HeroProps {
  img: StaticImageData;
  title: string;
  subtitle?: string;
}

const Hero: FC<HeroProps> = ({ img, title, subtitle }) => {
  return (
    <StyledHero>
      <HeroBackground img={img} />
      <HeroContainer>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
