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
import Text from "components/common/Text/text";
import Heading from "components/common/Heading";
import ProductItem from "components/common/ProductItem";
import { getProducts } from "utils/getProduct";
import { Product, ProductsData } from "../../interfaces/product.interface";
import AnimatedOnScroll from "../../components/AnimatedOnScroll";
import { getPageData } from "../../utils/getPageData";
import * as Constants from "../../constants";
import Seo from "../../components/Seo";

export const getStaticProps = async () => {
  const pageData = await getPageData(Constants.PAGE_TYPES.OFFER);
  const productsData = await getProducts();
  return {
    props: { pageData, productsData },
  };
};

const OffersPage: NextPage<ProductsData> = ({ pageData, productsData }) => {
  const { data } = productsData.props;
  const { page } = pageData.props;

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
