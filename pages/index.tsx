import React from "react";
import type { NextPage } from "next";
import Hero, { TitleType } from "components/Hero";
import Banner from "components/common/Banner";
import HeroImg from "assets/img/hero_stock.png";
import BannerImg from "assets/img/banner.png";
import {
  Container,
  FullSectionGray,
  Grid,
  InnerWrapper,
  StyledGridItems,
} from "components/layout/Layout.styled";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import ContentImg from "components/common/ContentImg";
import ProductItem from "../components/common/ProductItem";
import Features from "../components/common/Features";
import Cta from "../components/common/Cta";
import Testimonials from "../components/Testimonials";
import Partners from "../components/layout/Partners";
import CounterNumber from "../components/common/CounterNumber";
import Text from "../components/common/Text/text";

const Home: NextPage = () => {
  const title: TitleType = {
    textTop: "It’s high time you told",
    textBottom: "your story",
  };

  return (
    <>
      <Hero img={HeroImg}>
        <Heading headingLevel="h1">
          <span className="top">{title.textTop}</span>
          <span className="bottom">{title.textBottom}</span>
        </Heading>
        <Text>
          Storytelling in business has become a field in its own right as
          industries have grown
        </Text>
        <Button link="/oferta" type="primary" text="Zobacz ofertę" />
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
          <ContentImg isDecorated />
        </Grid>
      </Container>
      <Container pt5 as="section">
        <Heading headingLevel="h2">Nasza oferta</Heading>
        <StyledGridItems colCount={3} gap={5}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </StyledGridItems>
      </Container>
      <Banner img={BannerImg} text="Dlaczego warto z nami współpracować?" />

      <FullSectionGray pt5>
        <InnerWrapper>
          <Features />
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

export default Home;
