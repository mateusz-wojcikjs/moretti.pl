import React, { useEffect } from "react";
import { StyledAboutCta } from "./AboutCta.styled";
import Background from "../Background";
import CtaBg from "assets/img/about-cta.jpeg";
import Heading from "../Heading";
import Text from "../Text/text";
import Box from "icons/box";
import Aos from "aos";

const AboutCta = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <StyledAboutCta>
      <div data-aos="slide-right" className="cta-bg">
        <Background img={CtaBg} />
      </div>
      <div data-aos="slide-left" className="cta-container">
        <div className="cta-wrapper">
          <Heading headingLevel="h3">
            Dlaczego warto wybrać nasze produkty?
          </Heading>
          <Text>
            Jesteśmy w stanie zapewnić kompleksową obsługę wszystkim klientom
            zajmującym się produkcją, transportem i przechowywaniem produktów
            sypkich oraz granulowanych.
          </Text>
          <div className="bar" />
          <div className="icons-container">
            <div className="icon-box">
              <Box />
              <div>
                <h4>Fachowe doradztwo</h4>
                <p>Kompleksowa obsługa wszystkich klientów.</p>
              </div>
            </div>
            <div className="icon-box">
              <Box />
              <div>
                <h4>Fachowe doradztwo</h4>
                <p>Kompleksowa obsługa wszystkich klientów.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutCta>
  );
};

export default AboutCta;
