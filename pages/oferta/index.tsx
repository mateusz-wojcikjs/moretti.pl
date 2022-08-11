import React from "react";
import { NextPage } from "next";
import { Container, FullSectionGray } from "components/layout/Layout.styled";
import Cta from "components/common/Cta";
import Testimonials from "components/Testimonials";
import Partners from "components/layout/Partners";
import Hero, { TitleType } from "components/Hero";
import HeroImg from "assets/img/banner_2.jpg";

const title: TitleType = {
  textTop: "It’s high time you told",
  textBottom: "your story",
};
const OffersPage: NextPage = () => {
  return (
    <>
      <Hero
        img={HeroImg}
        title={title}
        subtitle={
          "Storytelling in business has become a field in its own right as industries have grown"
        }
        offers
        position="center"
      />
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
