import React from "react";
import { NextPage } from "next";
import {
  Container,
  FullSectionGray,
  StyledGridItems,
} from "components/layout/Layout.styled";
import Cta, { CtaProps } from "components/common/Cta";
import Testimonials, { Testimonial } from "components/Testimonials";
import Partners, { Partner } from "components/layout/Partners";
import Hero from "components/Hero";
import Text from "components/common/Text/text";
import Heading from "components/common/Heading";
import ProductItem from "components/common/ProductItem";
import Seo from "components/Seo";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import { Product } from "interfaces/product.interface";
import { OffersPageProps } from "interfaces/page.interface";
import * as Constants from "../../constants";
import * as Utils from "utils";

export const getStaticProps = async () => {
  const page = await Utils.getPageData(Constants.PAGE_TYPES.OFFER);
  const products = await Utils.getProducts();
  const testimonials = await Utils.getTestimonials();
  const customers = await Utils.getCustomers();
  const cta = await Utils.getCta();
  return {
    props: { page, products, testimonials, customers, cta },
  };
};

interface OffersPageStaticProps {
  products: Product[];
  page: OffersPageProps;
  testimonials: Testimonial[];
  customers: Partner[];
  cta: CtaProps;
}

const OffersPage: NextPage<OffersPageStaticProps> = (props) => {
  const products = props.products;
  const page = props.page;
  const testimonials = props.testimonials;
  const customers = props.customers;
  const cta = props.cta;
  const img = process.env.BASE_URL + page.header.heroImage.data.attributes.url;
  return (
    <>
      <Seo
        seoTitle={page.seoTitle}
        seoDescription={page.seoDescription}
        ogImage={img}
      />
      <Hero img={img} secondary position="center">
        <AnimatedOnScroll type="slide-right">
          <div className="hero-content">
            <Heading headingLevel="h1">
              <span className="decorated">{page.header.title.top}</span>{" "}
              {page.header.title.bottom}
            </Heading>
            <Text>{page.header.subTitle}</Text>
          </div>
        </AnimatedOnScroll>
      </Hero>
      <Container pt5 as="section">
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
      <FullSectionGray>
        <Cta content={cta} />
      </FullSectionGray>

      <Container>
        <Testimonials data={testimonials} />
      </Container>
      <Partners partners={customers} />
    </>
  );
};

export default OffersPage;
