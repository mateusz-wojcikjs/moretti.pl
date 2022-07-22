import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { HeroBackgroundStyled } from "./HeroBackground.styled";

interface HeroBackgroundProps {
  img: StaticImageData;
}

const HeroBackground: FC<HeroBackgroundProps> = ({ img }) => {
  return (
    <HeroBackgroundStyled>
      <Image src={img} layout="fill" objectFit="cover" alt="Hero Background" />
    </HeroBackgroundStyled>
  );
};

export default HeroBackground;
