import React from "react";
import { StyledPartners } from "./Partners.styled";
import Heading from "../../common/Heading";
import { StyledGridPartners } from "../Layout.styled";
import Image from "next/image";
import ImageCoop1 from "../../../assets/img/bubbble.png";
import ImageCoop2 from "../../../assets/img/amer.png";
import ImageCoop3 from "../../../assets/img/enhance.png";
import ImageCoop4 from "../../../assets/img/webpath.png";
import ImageCoop5 from "../../../assets/img/mediator-2.png";

const Partners = () => {
  return (
    <StyledPartners>
      <Heading headingLevel="h2" isCenter>
        Nasi partnerzy
      </Heading>
      <StyledGridPartners gap={5} colCount={5}>
        <div>
          <Image src={ImageCoop1} layout="fixed" />
        </div>
        <div>
          <Image src={ImageCoop2} layout="fixed" />
        </div>
        <div>
          <Image src={ImageCoop3} layout="fixed" />
        </div>
        <div>
          <Image src={ImageCoop4} layout="fixed" />
        </div>
        <div>
          <Image src={ImageCoop5} layout="fixed" />
        </div>
      </StyledGridPartners>
    </StyledPartners>
  );
};

export default Partners;
