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
import AnimatedOnScroll from "../components/AnimatedOnScroll";
import { getPageData } from "../utils/getPageData";
import { Page } from "interfaces/page.interface";
import ReactMarkdown from "react-markdown";

export const getStaticProps = () => {
  return getPageData();
};

const AboutPage: NextPage<Page> = ({ page }) => {
  return (
    <>
      <Hero img={HeroImg} secondary overlay>
        <Heading headingLevel="h1" isCenter>
          {page.title}
        </Heading>
        <Breadcrumbs />
      </Hero>

      <Container pt5 as="section">
        <AnimatedOnScroll>
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
                  Provide your customers a story they would enjoy keeping in
                  mind the objectives of your website. Pay special attention to
                  the tone of voice. Try to win the customers’ trust by being
                  positive.
                </p>
              </div>
              <Button link="/oferta" type="secondary" text="Zobacz ofertę" />
            </div>
            <ContentImg />
          </Grid>
        </AnimatedOnScroll>
      </Container>
      <Container>
        <AnimatedOnScroll>
          <Heading headingLevel="h2" isCenter>
            {page.timelineHeading}
          </Heading>
        </AnimatedOnScroll>
        <Timeline timelineItems={page.timelineItems} />
      </Container>
      <AboutCta data={page.ctaAbout} img={page.ctaImage} />
      <Container as="section" pt5>
        <AnimatedOnScroll>
          <Grid colCount={2} gap={5}>
            <ContentImg />
            <div className="about">
              <h3>{page.aboutContentWithImage.title}</h3>
              <div className="about--text-box">
                <p>{page.aboutContentWithImage.listTitle}</p>
                <ReactMarkdown>
                  {page.aboutContentWithImage.textContent}
                </ReactMarkdown>
              </div>
            </div>
          </Grid>
          <Heading headingLevel="h3" isCenter>
            {page.aboutContentWithImage.wideText}
          </Heading>
        </AnimatedOnScroll>
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
