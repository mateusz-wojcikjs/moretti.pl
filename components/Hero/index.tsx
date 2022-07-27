import React, { FC } from "react";
import { StaticImageData } from "next/image";
import HeroBackground from "./HeroBackground/HeroBackground";
import { HeroContainer, StyledHero } from "./Hero.styled";
import Heading from "../common/Heading";
import Button from "../common/Button";
import Text from "../common/Text/text";

export type TitleType = {
  textTop: string;
  textBottom?: string;
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
        <Heading headingLevel="h1">
          <span className="top">{title.textTop}</span>
          <span className="bottom">{title.textBottom}</span>
        </Heading>
        <Text>{subtitle}</Text>
        <Button link="/oferta" type="primary" text="Zobacz ofertę" />
        <Button link="/oferta" type="secondary" text="Zobacz ofertę" />
        <Button link="/oferta" type="tertiary" text="Zobacz ofertę" />
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
