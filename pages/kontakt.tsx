import React from "react";
import { NextPage } from "next";
import Hero from "components/Hero";
import Heading from "components/common/Heading";
import Breadcrumbs from "components/common/Breadcrumbs";
import { Container, Grid } from "components/layout/Layout.styled";
import ListIconItem from "components/common/ListIconItem";
import ContactForm from "components/ContactForm";
import Seo from "components/Seo";
import { getPageData } from "utils/getPageData";
import { IContactPage } from "interfaces/page.interface";
import * as Constants from "../constants";
import AnimatedOnScroll from "../components/AnimatedOnScroll";

export const getStaticProps = async () => {
  const page = await getPageData(Constants.PAGE_TYPES.CONTACT);
  return {
    props: { page },
  };
};
const ContactPage: NextPage<IContactPage> = ({ page }) => {
  const heroUrl = process.env.BASE_URL + page.heroImage.data.attributes.url;

  return (
    <>
      <Seo
        seoTitle={page.seoTitle}
        seoDescription={page.seoDescription}
        ogImage={heroUrl}
      />
      <Hero img={heroUrl} overlay={0.5} secondary textCenter>
        <Heading headingLevel="h1" isCenter>
          {page.title}
        </Heading>
        <Breadcrumbs />
      </Hero>
      <Container pt5 as="section">
        <AnimatedOnScroll>
          <Grid colCount={2} gap={5}>
            <div>
              <Heading headingLevel="h2" isDecorated>
                {page.H2}
              </Heading>
              {page.contactValues.map((item) => (
                <ListIconItem key={item.id} data={item} />
              ))}
            </div>
            <ContactForm />
          </Grid>
        </AnimatedOnScroll>
      </Container>
    </>
  );
};

export default ContactPage;
