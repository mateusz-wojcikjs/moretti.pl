import React from "react";
import { NextPage } from "next";
import {
  Container,
  FullSectionGray,
  StyledGridItems,
} from "components/layout/Layout.styled";
import Cta from "components/common/Cta";
import Testimonials from "components/Testimonials";
import Partners from "components/layout/Partners";
import Hero from "components/Hero";
import HeroImg from "assets/img/banner_2.jpg";
import Text from "../../components/common/Text/text";
import Heading from "../../components/common/Heading";
import ProductItem from "../../components/common/ProductItem";
import { getProducts } from "../../utils/getProduct";
import { Product, ProductsData } from "../../interfaces/product.interface";
import AnimatedOnScroll from "../../components/AnimatedOnScroll";

export const getStaticProps = async () => {
  return getProducts();
};

const OffersPage: NextPage<ProductsData> = ({ data }) => {
  return (
    <>
      <Hero img={HeroImg} secondary position="center">
        <AnimatedOnScroll type="slide-right">
          <div className="hero-content">
            <Heading headingLevel="h1">
              <span className="decorated">Nasza</span> oferta
            </Heading>
            <Text>
              Zapraszamy do zapoznania się z produktami znajdującymi się w
              naszej ofercie.
            </Text>
          </div>
        </AnimatedOnScroll>
      </Hero>
      <Container pt5 as="section">
        <AnimatedOnScroll>
          <Heading headingLevel="h2">Nasza oferta</Heading>
          <StyledGridItems colCount={data?.length} gap={5}>
            {data.map((product: Product) => (
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
        <Cta />
      </FullSectionGray>

      <Container>
        <Testimonials />
      </Container>
      <Partners />
    </>
  );
};

export default OffersPage;
