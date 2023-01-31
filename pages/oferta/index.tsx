import React from "react";
import { NextPage } from "next";
import { Container, StyledGridItems } from "components/layout/Layout.styled";
import { CtaProps } from "components/common/Cta";
import { Testimonial } from "components/Testimonials";
import { Partner } from "components/layout/Partners";
import Heading from "components/common/Heading";
import ProductItem from "components/common/ProductItem";
import Seo from "components/Seo";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import { Product } from "interfaces/product.interface";
import { OffersPageProps } from "interfaces/page.interface";
import * as Constants from "../../constants";
import * as Utils from "utils";
import BodyBackground from "../../components/layout/BodyBackground";

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
  const img = process.env.BASE_URL + page.header.heroImage.data.attributes.url;
  return (
    <>
      <Seo
        seoTitle={page.seoTitle}
        seoDescription={page.seoDescription}
        ogImage={img}
      />
      <BodyBackground {...{ img }} />
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
    </>
  );
};

export default OffersPage;
