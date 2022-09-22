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
        blurDataURL="rgb(237, 181, 6)"
      />
    </BackgroundStyled>
  );
};

export default Background;
