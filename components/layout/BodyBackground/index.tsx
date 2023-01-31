import React from "react";
import { StyledBodyBackground } from "./BodyBackground.styled";
import Image, { StaticImageData } from "next/image";
import * as Utils from "utils";

const BodyBackground = ({ img }: { img: StaticImageData | string }) => {
  return (
    <StyledBodyBackground>
      <Image
        height={900}
        width={2900}
        className="responsive-cover-img"
        src={img}
        alt="Hero Image"
        quality={70}
        placeholder="blur"
        blurDataURL={Utils.placeholder}
      />
    </StyledBodyBackground>
  );
};

export default BodyBackground;
