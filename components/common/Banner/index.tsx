import React from "react";
import { StaticImageData } from "next/image";
import { StyledBanner } from "./Banner.styled";
import { InnerWrapper } from "components/layout/Layout.styled";
import Background from "components/common/Background";
import Heading from "../Heading";

interface BannerProps {
  img: StaticImageData;
  text: string;
}

const Banner = ({ img, text }: BannerProps) => {
  return (
    <StyledBanner>
      <Background img={img} />
      <InnerWrapper>
        <Heading headingLevel="h3" isSecondary>
          {text}
        </Heading>
      </InnerWrapper>
    </StyledBanner>
  );
};

export default Banner;
