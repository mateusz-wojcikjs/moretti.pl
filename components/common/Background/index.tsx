import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { BackgroundStyled } from "./Background.styled";

interface HeroBackgroundProps {
  img: StaticImageData;
}

const Background: FC<HeroBackgroundProps> = ({ img }) => {
  return (
    <BackgroundStyled>
      <Image src={img} layout="fill" objectFit="cover" alt="Hero Index" />
    </BackgroundStyled>
  );
};

export default Background;
