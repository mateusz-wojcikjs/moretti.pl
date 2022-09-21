import React, { useEffect } from "react";
import { StyledAboutCta } from "./AboutCta.styled";
import Background from "../Background";
import Heading from "../Heading";
import Text from "../Text/text";
import Aos from "aos";
import { CtaAbout, FileUrl } from "interfaces/page.interface";
import Image from "next/image";

interface AboutCtaProps {
  data: CtaAbout;
  img: FileUrl;
}

const AboutCta = ({ data, img }: AboutCtaProps) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const { url } = img.data.attributes;
  const link = "http://localhost:1337" + url;
  return (
    <StyledAboutCta>
      <div data-aos="slide-right" className="cta-bg">
        <Background img={link} />
      </div>
      <div data-aos="slide-left" className="cta-container">
        <div className="cta-wrapper">
          <Heading headingLevel="h3">{data.title}</Heading>
          <Text>{data.ctaAboutContent}</Text>
          <div className="bar" />
          <div className="icons-container">
            {data.iconWithText.map((item) => {
              const { url: iconUrl } = item.icon.data.attributes;
              const iconLink = "http://localhost:1337" + iconUrl;
              return (
                <div className="icon-box" key={item.id}>
                  <Image
                    layout="fixed"
                    height="100%"
                    width="100%"
                    src={iconLink}
                    alt={item.title + " ikona"}
                  />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledAboutCta>
  );
};

export default AboutCta;
