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
} from "components/layout/Layout.styled";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import DecoratedImg from "components/common/DecoratedImg";
import ProductItem from "../components/common/ProductItem";
import Features from "../components/common/Features";

const Home: NextPage = () => {
  const title: TitleType = {
    textTop: "It’s high time you told",
    textBottom: "your story",
  };

  return (
    <>
      <Hero
        img={HeroImg}
        title={title}
        subtitle={
          "Storytelling in business has become a field in its own right as industries have grown"
        }
      />
      <Container pt5 as="section">
        <Grid colCount={2} gap={15}>
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
      <Container pt5 as="section">
        <Heading headingLevel="h2">Nasza oferta</Heading>
        <Grid colCount={3} gap={5}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Grid>
      </Container>
      <Banner img={BannerImg} text="Dlaczego warto z nami współpracować?" />

      <FullSectionGray>
        <InnerWrapper>
          <Features />
          <Grid colCount={3} gap={5}>
            <div>
              <p>+200</p>
              <p>
                Description of the number. People always pay attention to
                numbers.{" "}
              </p>
            </div>
            <div>
              <p>20%</p>
              <p>
                Description of the number. People always pay attention to
                numbers.{" "}
              </p>
            </div>
            <div>
              <p>12k</p>
              <p>
                Description of the number. People always pay attention to
                numbers.{" "}
              </p>
            </div>
          </Grid>
        </InnerWrapper>
      </FullSectionGray>
    </>
  );
};

export default Home;