import React from "react";
import Hero from "../Hero";
import HeroImg from "../../assets/img/about.jpeg";
import Heading from "../common/Heading";
import Breadcrumbs from "../common/Breadcrumbs";
import { Container, FullSectionGray } from "../layout/Layout.styled";
import GridGallery from "../common/GridGallery";
import TextBox from "../common/TextBox";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Slider from "../Slider";
import Cta from "../common/Cta";
import Testimonials from "../Testimonials";
import Partners from "../layout/Partners";
import { ProductData } from "interfaces/product.interface";
import Head from "next/head";

const ProductTemplate = ({ data }: ProductData) => {
  const { attributes: product } = data;
  const [{ textContent, image }] = product.descriptionBottomWithImage;
  const url = "http://localhost:1337" + image.data.attributes.url;
  const heroUrl =
    "http://localhost:1337" +
    product.heroImage.data.attributes.formats.large.url;
  return (
    <>
      <Head>
        <title>Moretti Macchine - {product.seoTitle}</title>
      </Head>
      <Hero img={heroUrl || HeroImg} secondary textCenter>
        <Heading headingLevel="h1" isCenter>
          {product.name}
        </Heading>
        <Breadcrumbs />
      </Hero>
      <Container>
        <GridGallery />
      </Container>

      <Container>
        <TextBox>
          <ReactMarkdown>{product.descriptionTop}</ReactMarkdown>
        </TextBox>
        <TextBox>
          <div className="img-inside">
            <ReactMarkdown className="with-img">{textContent}</ReactMarkdown>
            <Image
              src={url}
              width="100%"
              height="100%"
              layout="responsive"
              quality={100}
              placeholder="blur"
              blurDataURL="rgb(237, 181, 6)"
              className="content-image"
            />
          </div>
        </TextBox>

        <Heading headingLevel="h2" isDecorated>
          Zobacz zdjęcia
        </Heading>
        <Slider />
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

export default ProductTemplate;
