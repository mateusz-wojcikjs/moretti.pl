import React from "react";
import { NextPage } from "next";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Hero from "../../components/Hero";
import HeroImg from "../../assets/img/about.jpeg";
import Heading from "../../components/common/Heading";
import {
  Container,
  FullSectionGray,
} from "../../components/layout/Layout.styled";
import Cta from "../../components/common/Cta";
import Testimonials from "../../components/Testimonials";
import Partners from "../../components/layout/Partners";

const OfferPage: NextPage = () => {
  return (
    <>
      <Hero img={HeroImg} secondary textCenter>
        <Heading headingLevel="h1" isCenter>
          Produkt 1
        </Heading>
        <Breadcrumbs />
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

export default OfferPage;
