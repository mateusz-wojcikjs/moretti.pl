import { NextPage } from "next";
import React from "react";
import {
  Container,
  FullSectionGray,
  Grid,
  InnerWrapper,
} from "components/layout/Layout.styled";
import CounterNumber from "components/common/CounterNumber";
import Cta from "components/common/Cta";
import Testimonials from "components/Testimonials";
import Partners from "components/layout/Partners";
import Hero from "components/Hero";
import HeroImg from "../assets/img/about.jpeg";
import Heading from "components/common/Heading";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Button from "../components/common/Button";
import DecoratedImg from "../components/common/DecoratedImg";

const AboutPage: NextPage = () => {
  return (
    <>
      <Hero img={HeroImg} secondary overlay textCenter>
        <Heading headingLevel="h1">O Firmie</Heading>
        <Breadcrumbs />
      </Hero>

      <Container pt5 as="section">
        <Grid colCount={2} gap={5}>
          <div>
            <Heading headingLevel="h2">
              Medium length title for building block
            </Heading>
            <div className="temp--text-box">
              <p>
                A paragraph or two with information on your product/service or
                describes a problem your product/service is designed to solve.
              </p>
              <p>
                Provide your customers a story they would enjoy keeping in mind
                the objectives of your website. Pay special attention to the
                tone of voice. Try to win the customers’ trust by being
                positive.
              </p>
            </div>
            <Button link="/oferta" type="secondary" text="Zobacz ofertę" />
          </div>
          <DecoratedImg />
        </Grid>
      </Container>
      <FullSectionGray>
        <InnerWrapper>
          <CounterNumber />
        </InnerWrapper>
        <Cta />
      </FullSectionGray>

      <Container>
        <Testimonials />
      </Container>
      <Partners />
    </>
  );
};

export default AboutPage;
