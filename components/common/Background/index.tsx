import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { BackgroundStyled } from "./Background.styled";
import * as Utils from "utils";

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
        blurDataURL={Utils.placeholder}
      />
    </BackgroundStyled>
  );
};

export default Background;
