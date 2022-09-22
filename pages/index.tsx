import React from "react";
import type { NextPage } from "next";
import Hero from "components/Hero";
import Banner from "components/common/Banner";
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
import Features from "../components/common/Features";
import Cta from "../components/common/Cta";
import Testimonials from "../components/Testimonials";
import Partners from "../components/layout/Partners";
import CounterNumber from "../components/common/CounterNumber";
import Text from "../components/common/Text/text";
import AnimatedOnScroll from "../components/AnimatedOnScroll";
import { getPageData } from "../utils/getPageData";
import * as Constants from "../constants";
import { IHomePage } from "interfaces/page.interface";
import ReactMarkdown from "react-markdown";
import Seo from "components/Seo";

export const getStaticProps = () => {
  return getPageData(Constants.PAGE_TYPES.HOME);
};

const Home: NextPage<IHomePage> = ({ page }) => {
  const heroImg =
    process.env.BASE_URL +
    page.header.heroImage.data.attributes.formats.large.url;

  const img = page.image.data.attributes.url;

  return (
    <>
      <Seo
        seoTitle={page.seoTitle}
        seoDescription={page.seoDescription}
        ogImage={heroImg}
      />
      <Hero img={heroImg}>
        <Heading headingLevel="h1">
          <span className="top">{page.header.title.top}</span>
          <span className="bottom">{page.header.title.bottom}</span>
        </Heading>
        <Text>{page.header.subTitle}</Text>
        <Button link="/oferta" type="primary" text="Zobacz ofertę" />
      </Hero>
      <Container pt5 as="section">
        <AnimatedOnScroll>
          <Grid colCount={2} gap={5}>
            <div className="text-box">
              <ReactMarkdown>{page.mainText}</ReactMarkdown>
              <Button link="/oferta" type="secondary" text="Zobacz ofertę" />
            </div>
            <ContentImg isDecorated img={img} />
          </Grid>
        </AnimatedOnScroll>
      </Container>
      <Container pt5 as="section">
        <Heading headingLevel="h2">Nasza oferta</Heading>
        <StyledGridItems colCount={3} gap={5}>
          dd
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
