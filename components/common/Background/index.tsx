import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { BackgroundStyled } from "./Background.styled";

interface HeroBackgroundProps {
  img: StaticImageData | string;
}

const Background: FC<HeroBackgroundProps> = ({ img }) => {
  return (
    <BackgroundStyled>
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        alt="Hero Image"
        quality={100}
        placeholder="blur"
      />
    </BackgroundStyled>
  );
};

export default Background;
