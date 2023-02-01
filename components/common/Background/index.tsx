import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { BackgroundStyled } from "./Background.styled";

interface HeroBackgroundProps {
  img: StaticImageData | string;
}

const Background: FC<HeroBackgroundProps> = ({ img }) => {
  return (
    <BackgroundStyled>
      <Image
        height={900}
        width={1900}
        className="responsive-cover-img"
        src={img}
        alt="Hero Image"
        quality={70}
        priority={true}
      />
    </BackgroundStyled>
  );
};

export default Background;
