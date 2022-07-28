import React from "react";
import Image from "next/image";
import AboutImg from "assets/img/grain-silos-7007434.jpg";
import { GreenCross, RedCross, StyledImg } from "./DecoratedImg.styled";

const DecoratedImg = () => {
  return (
    <StyledImg>
      <GreenCross />
      <RedCross />
      <Image src={AboutImg} layout="responsive" />
    </StyledImg>
  );
};

export default DecoratedImg;
