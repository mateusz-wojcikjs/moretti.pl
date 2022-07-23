import React, { FC } from "react";
import { StaticImageData } from "next/image";
import HeroBackground from "./HeroBackground/HeroBackground";
import { HeroContainer, StyledHero } from "./Hero.styled";
import Heading from "../common/Heading";

export type TitleType = {
  textTop: string;
  textBottom: string;
};

interface HeroProps {
  img: StaticImageData;
  title: TitleType;
  subtitle?: string;
}

const Hero: FC<HeroProps> = ({ img, title, subtitle }) => {
  return (
    <StyledHero>
      <HeroBackground img={img} />
      <HeroContainer>
        <Heading title={title} headingLevel={"h1"} />
        <p>{subtitle}</p>
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
