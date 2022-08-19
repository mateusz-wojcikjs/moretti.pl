import React from "react";
import Image from "next/image";
import AboutImg from "assets/img/grain-silos-7007434.jpg";
import { GreenCross, RedCross, StyledImg } from "./ContentImg.styled";
import { ImgWrapper } from "../../layout/Layout.styled";

const ContentImg = ({ isDecorated }: { isDecorated?: boolean }) => {
  return (
    <StyledImg>
      {isDecorated && <GreenCross />}
      {isDecorated && <RedCross />}
      <ImgWrapper>
        <Image src={AboutImg} layout="responsive" />
      </ImgWrapper>
    </StyledImg>
  );
};

export default ContentImg;
