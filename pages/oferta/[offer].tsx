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
import Slider from "../../components/Slider";
import GridGallery from "../../components/common/GridGallery";

const OfferPage: NextPage = () => {
  return (
    <>
      <Hero img={HeroImg} secondary textCenter>
        <Heading headingLevel="h1" isCenter>
          Produkt 1
        </Heading>
        <Breadcrumbs />
      </Hero>
      <Container>
        <GridGallery />
      </Container>

      <Container>
        <Heading headingLevel="h2" isDecorated>
          Zobacz zdjęcia
        </Heading>

        <Slider />
      </Container>

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
