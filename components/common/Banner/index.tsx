import React from "react";
import Background from "components/common/Background";
import Heading from "components/common/Heading";
import { InnerWrapper } from "components/layout/Layout.styled";
import { StyledBanner } from "./Banner.styled";

interface BannerProps {
  img: string;
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
