import React from "react";
import { NextPage } from "next";
import { Container, FullSectionGray } from "components/layout/Layout.styled";
import Cta from "components/common/Cta";
import Testimonials from "components/Testimonials";
import Partners from "components/layout/Partners";
import Hero from "components/Hero";
import HeroImg from "assets/img/banner_2.jpg";
import Text from "../../components/common/Text/text";
import Heading from "../../components/common/Heading";

const OffersPage: NextPage = () => {
  return (
    <>
      <Hero img={HeroImg} secondary position="center">
        <div className="hero-content">
          <Heading headingLevel="h1">
            <span className="decorated">Nasza</span> oferta
          </Heading>
          <Text>
            Zapraszamy do zapoznania się z produktami znajdującymi się w naszej
            ofercie.
          </Text>
        </div>
      </Hero>
      <FullSectionGray>
        <Cta />
      </FullSectionGray>

      <Container>
        <Testimonials />
      </Container>
      <Partners />
    </>
  );
};

export default OffersPage;
