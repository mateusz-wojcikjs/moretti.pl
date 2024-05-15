import React, { useEffect } from "react";
import { StyledCta } from "./Cta.styled";
import Background from "../Background";
import Heading from "../Heading";
import Aos from "aos";
import { FileUrl } from "interfaces/page.interface";
import ButtonLink from "../ButtonLink";

export interface CtaProps {
  id: number;
  attributes: CtaAttributes;
}

export interface CtaAttributes {
  title: string;
  description: string;
  backgroundImage: FileUrl;
}

interface ICta {
  content: CtaProps;
}

const Cta = ({ content }: ICta) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const img =
    process.env.BASE_URL +
    content.attributes.backgroundImage.data.attributes.url;

  return (
    <StyledCta>
      <div data-aos="slide-right" className="cta-container">
        <div className="cta-content">
          <Heading headingLevel="h3">{content.attributes.title}</Heading>
          <p className="cta-description">{content.attributes.description}</p>
          <ButtonLink href="/kontakt" size="l" type="primary">
            Skontaktuj się
          </ButtonLink>
        </div>
      </div>
      <div className="cta-bg">
        <Background img={img} />
      </div>
    </StyledCta>
  );
};

export default Cta;
