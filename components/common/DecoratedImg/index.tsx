import React from "react";
import Image from "next/image";
import AboutImg from "assets/img/grain-silos-7007434.jpg";
import { StyledImg } from "./DecoratedImg.styled";

const DecoratedImg = () => {
  return (
    <StyledImg>
      <Image src={AboutImg} width={700} height={500} />
    </StyledImg>
  );
};

export default DecoratedImg;
