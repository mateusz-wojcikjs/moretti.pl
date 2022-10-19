import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Container,
  FullSectionGray,
  Grid,
  InnerWrapper,
} from "components/layout/Layout.styled";
import CounterNumber from "components/common/CounterNumber";
import Cta, { CtaProps } from "components/common/Cta";
import Testimonials, { Testimonial } from "components/Testimonials";
import Partners, { Partner } from "components/layout/Partners";
import Hero from "components/Hero";
import Heading from "components/common/Heading";
import Breadcrumbs from "components/common/Breadcrumbs";
import Button from "components/common/Button";
import ContentImg from "components/common/ContentImg";
import Timeline from "components/common/Timeline";
import AboutCta from "components/common/AboutCta";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import Seo from "components/Seo";
import { AboutPageProps, CountersProps } from "interfaces/page.interface";
import { NextPage } from "next";
import * as Constants from "../constants";
import * as Utils from "utils";

export const getStaticProps = async () => {
  const page = await Utils.getPageData(Constants.PAGE_TYPES.ABOUT);
  const testimonials = await Utils.getTestimonials();
  const customers = await Utils.getCustomers();
  const cta = await Utils.getCta();
  const counters = await Utils.getCounters();
  return {
    props: { page, testimonials, customers, cta, counters },
  };
};

interface AboutPageStaticProps {
  page: AboutPageProps;
  testimonials: Testimonial[];
  customers: Partner[];
  cta: CtaProps;
  counters: CountersProps;
}

const AboutPage: NextPage<AboutPageStaticProps> = (props) => {
  const page = props.page;
  const counters = props.counters;
  const cta = props.cta;
  const testimonials = props.testimonials;
  const customers = props.customers;
  const img = page.ctaImage.data.attributes.url;
  const heroImg = process.env.BASE_URL + page.ctaImage.data.attributes.url;
  return (
    <>
      <Seo
        seoTitle={page.seoTitle}
        seoDescription={page.seoDescription}
        ogImage={heroImg}
      />
      <Hero img={heroImg} secondary overlay={0.4}>
        <Heading headingLevel="h1" isCenter>
          {page.title}
        </Heading>
        <Breadcrumbs />
      </Hero>

      <Container pt5 as="section">
        <AnimatedOnScroll>
          <Grid colCount={2} gap={5}>
            <div className="text-box">
              <ReactMarkdown>{page.aboutContent}</ReactMarkdown>
              <Button link="/oferta" type="secondary" text="Zobacz ofertę" />
            </div>
            <ContentImg
              img={img}
              alt={page.ctaImage.data.attributes.alternativeText}
            />
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
      <AboutCta data={page.ctaAbout} img={page.ctaImage.data.attributes.url} />
      <Container as="section" pt5>
        <AnimatedOnScroll>
          <Grid colCount={2} gap={5}>
            <ContentImg
              img={page.aboutContentWithImage.image.data.attributes.url}
              alt={
                page.aboutContentWithImage.image.data.attributes.alternativeText
              }
            />
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
          <CounterNumber data={counters} />
        </InnerWrapper>
        <Cta content={cta} />
      </FullSectionGray>

      <Container>
        <Testimonials data={testimonials} />
      </Container>
      <Partners partners={customers} />
    </>
  );
};

export default AboutPage;
