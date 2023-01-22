import React from "react";
import Image from "next/image";
import Heading from "components/common/Heading";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import { StyledPartners } from "./Partners.styled";
import { StyledGridPartners } from "../Layout.styled";
import { FileUrl } from "interfaces/page.interface";

interface IPartners {
  partners: Partner[];
}

export interface Partner {
  id: number;
  attributes: PartnersAttributes;
}

interface PartnersAttributes {
  companyName: string;
  logo: FileUrl;
}

const Partners = ({ partners }: IPartners) => {
  return (
    <StyledPartners>
      <AnimatedOnScroll>
        <Heading headingLevel="h2" isCenter>
          Nasi partnerzy
        </Heading>
        <StyledGridPartners gap={5} colCount={partners.length}>
          {partners.map((partner) => {
            const img =
              process.env.BASE_URL +
              partner.attributes.logo.data.attributes.url;
            return (
              <div className="item" key={partner.id}>
                <Image
                  src={img}
                  height={300}
                  width={300}
                  className="responsive-contain-img"
                  alt={partner.attributes.companyName}
                />
              </div>
            );
          })}
        </StyledGridPartners>
      </AnimatedOnScroll>
    </StyledPartners>
  );
};

export default Partners;
