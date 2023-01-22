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
        height={900}
        width={900}
        className="responsive-cover-img"
        src={img}
        alt="Hero Image"
        quality={70}
        placeholder="blur"
        blurDataURL={Utils.placeholder}
      />
    </BackgroundStyled>
  );
};

export default Background;
