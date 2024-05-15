import React from "react";
import ReactMarkdown from "react-markdown";
import Seo from "components/Seo";
import Hero from "components/Hero";
import Banner from "components/common/Banner";
import {
  Container,
  FullSectionGray,
  Grid,
  InnerWrapper,
  StyledGridItems,
} from "components/layout/Layout.styled";
import Heading from "components/common/Heading";
import Features from "components/common/Features";
import Cta from "components/common/Cta";
import Text from "components/common/Text/text";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import ProductItem from "components/common/ProductItem";
import * as Constants from "../constants";
import * as Utils from "utils";
import type { NextPage } from "next";
import { HomePageStaticProps } from "interfaces/page.interface";
import { Product } from "interfaces/product.interface";
import ButtonLink from "../components/common/ButtonLink";
import ContentImg from "../components/common/ContentImg";

export const getStaticProps = async () => {
  const page = await Utils.getPageData(Constants.PAGE_TYPES.HOME);
  const products = await Utils.getProducts();
  const testimonials = await Utils.getTestimonials();
  const customers = await Utils.getCustomers();
  const cta = await Utils.getCta();
  const banner = await Utils.getBanner();
  const counters = await Utils.getCounters();
  const features = await Utils.getFeatures();
  return {
    props: {
      page,
      products,
      testimonials,
      customers,
      cta,
      banner,
      counters,
      features,
    },
  };
};

const Home: NextPage<HomePageStaticProps> = (props) => {
  const products = props.products;
  const page = props.page;
  const cta = props.cta;
  const banner = props.banner;
  const features = props.features;
  const heroImg =
    process.env.BASE_URL + page.header.heroImage.data.attributes.url;
  const img = page.image.data.attributes.formats.large.url;
  const bannerImg =
    process.env.BASE_URL +
    banner.attributes.backgroundImage.data.attributes.url;

  return (
    <>
      <Seo
        seoTitle={page.seoTitle}
        seoDescription={page.seoDescription}
        ogImage={heroImg}
      />
      <Hero img={heroImg} overlay={0.13}>
        <Heading headingLevel="h1">
          <span className="top">{page.header.title.top}</span>
          <span className="bottom">{page.header.title.bottom}</span>
        </Heading>
        <Text>{page.header.subTitle}</Text>
        <ButtonLink href="/oferta" size="l" type="primary">
          Zobacz ofertę
        </ButtonLink>
      </Hero>
      <Container pt5 as="section">
        <AnimatedOnScroll>
          <Grid colCount={2} gap={5}>
            <div className="text-box">
              <ReactMarkdown>{page.mainText}</ReactMarkdown>
              <ButtonLink href="/oferta" size="l" type="secondary">
                Zobacz ofertę
              </ButtonLink>
            </div>
            <ContentImg
              isDecorated
              img={img}
              alt={page.image.data.attributes.alternativeText}
            />
          </Grid>
        </AnimatedOnScroll>
      </Container>
      <Container as="section">
        <AnimatedOnScroll>
          <Heading headingLevel="h2">Nasza oferta</Heading>
          <StyledGridItems colCount={products?.length} gap={5}>
            {products.map((product: Product) => (
              <ProductItem
                key={product.id}
                name={product.attributes.name}
                descriptionTop={product.attributes.seoDescription}
                thumbnail={product.attributes.heroImage}
              />
            ))}
          </StyledGridItems>
        </AnimatedOnScroll>
      </Container>
      <Banner img={bannerImg} text={banner.attributes.title} />

      <FullSectionGray pt5>
        <InnerWrapper>
          <Features data={features} />
        </InnerWrapper>
        <Cta content={cta} />
      </FullSectionGray>
    </>
  );
};

export default Home;
