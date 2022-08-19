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
import ContentImg from "../components/common/ContentImg";
import Timeline from "../components/common/Timeline";
import AboutCta from "../components/common/AboutCta";

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
          <ContentImg />
        </Grid>
      </Container>
      <Container>
        <Heading headingLevel="h2">
          Stale poszerzamy gamę produktów i tak kolejno wprowadzaliśmy do naszej
          oferty:
        </Heading>
        <Timeline />
      </Container>
      <AboutCta />
      <Container as="section" pt5>
        <Grid colCount={2} gap={5}>
          <ContentImg />
          <div className="about">
            <h3>
              Gwarantujemy autoryzowany serwis wszystkich zainstalowanych
              rozwiązań i urządzeń
            </h3>
            <div className="about--text-box">
              <p>
                Wieloletnia współpraca z czołowymi producentami w poszczególnych
                branżach umożliwia nam korzystne oferowanie następujących
                produktów:
              </p>
              <ul>
                <li>automatycznych pakowaczek jednostkowych,</li>
                <li>wagopakarek do pakowania w worki wentylowe i zaszywane,</li>
                <li>stacji załadunku i wyładunku Big-Bag,</li>
                <li>urządzeń paletyzujących i depaletyzatorów,</li>
                <li>automatycznych owijarek palet,</li>
                <li>wag przepływowych,</li>
                <li>szczotek przemysłowych,</li>
                <li>stacji mikrodozowania,</li>
                <li>systemów transportu pneumatycznego i mechanicznego,</li>
                <li>mieszalników,</li>
                <li>silosów każdego rodzaju,</li>
                <li>
                  linii granulujących a także poszczególnych ich elementów,
                </li>
                <li> kompletnych zakładów paszowych.</li>
              </ul>
            </div>
          </div>
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
