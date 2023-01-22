import React from "react";
import Image from "next/image";
import { GreenCross, RedCross, StyledImg } from "./ContentImg.styled";
import { ImgWrapper } from "components/layout/Layout.styled";

interface ContentImgProps {
  isDecorated?: boolean;
  img: string;
  alt?: string;
}

const ContentImg = ({ isDecorated, img, alt }: ContentImgProps) => {
  const imgUrl = process.env.BASE_URL + img;
  return (
    <StyledImg>
      {isDecorated && <GreenCross />}
      {isDecorated && <RedCross />}
      <ImgWrapper>
        <Image
          src={imgUrl}
          alt={alt || ""}
          height={500}
          width={500}
          className="responsive-cover-img"
        />
      </ImgWrapper>
    </StyledImg>
  );
};

export default ContentImg;
