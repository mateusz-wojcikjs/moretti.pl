import React, { useEffect } from "react";
import { StyledCta } from "./Cta.styled";
import Background from "../Background";
import Heading from "../Heading";
import Button from "../Button";
import Aos from "aos";
import { FileUrl } from "interfaces/page.interface";

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
          <p>{content.attributes.description}</p>
          <Button link="/kontakt" type="primary" text="Skontaktuj się" />
        </div>
      </div>
      <div className="cta-bg">
        <Background img={img} />
      </div>
    </StyledCta>
  );
};

export default Cta;
