import React, { useEffect } from "react";
import { StyledCta } from "./Cta.styled";
import Background from "../Background";
import CtaBg from "assets/img/cta-bg.png";
import Heading from "../Heading";
import Button from "../Button";
import Aos from "aos";

const Cta = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <StyledCta>
      <div data-aos="slide-right" className="cta-container">
        <div className="cta-content">
          <Heading headingLevel="h3">
            Masz pytania? Skontaktuj się z nami!
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
            imperdiet enim viverra. Neque, sodales montes, aliquet gravida.
          </p>
          <Button link="/kontakt" type="primary" text="Skontaktuj się" />
        </div>
      </div>
      <div className="cta-bg">
        <Background img={CtaBg} />
      </div>
    </StyledCta>
  );
};

export default Cta;
