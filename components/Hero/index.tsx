import React, { FC } from "react";
import { StaticImageData } from "next/image";
import Background from "../common/Background";
import { StyledHero } from "./Hero.styled";
import Heading from "components/common/Heading";
import Button from "components/common/Button";
import Text from "components/common/Text/text";
import { InnerWrapper } from "components/layout/Layout.styled";

export type TitleType = {
  textTop: string;
  textBottom?: string;
};

export type PositionType = "center" | "top" | "bottom";

interface HeroProps {
  img: StaticImageData;
  title: TitleType;
  subtitle?: string;
  offers?: boolean;
  offer?: boolean;
  position?: PositionType;
}

const Hero: FC<HeroProps> = ({
  img,
  title,
  subtitle,
  offers,
  offer,
  position,
}) => {
  const options = {
    offers,
    offer,
    position: position,
  };
  return (
    <StyledHero options={options}>
      <Background img={img} />
      <InnerWrapper>
        <Heading headingLevel="h1">
          <span className="top">{title.textTop}</span>
          <span className="bottom">{title.textBottom}</span>
        </Heading>
        <Text>{subtitle}</Text>
        <Button link="/oferta" type="primary" text="Zobacz ofertę" />
      </InnerWrapper>
    </StyledHero>
  );
};

export default Hero;
