import React from "react";
import { NextPage } from "next";
import Hero from "components/Hero";
import Heading from "components/common/Heading";
import Breadcrumbs from "components/common/Breadcrumbs";
import { Container, Grid } from "components/layout/Layout.styled";
import ListIconItem from "../components/common/ListIconItem";
import ContactForm from "components/ContactForm";
import { getPageData } from "utils/getPageData";
import { IContactPage } from "interfaces/page.interface";
import * as Constants from "../constants";
import Seo from "../components/Seo";

export const getStaticProps = () => {
  return getPageData(Constants.PAGE_TYPES.CONTACT);
};
const ContactPage: NextPage<IContactPage> = ({ page }) => {
  const heroUrl =
    process.env.BASE_URL + page.heroImage.data.attributes.formats.medium.url;

  return (
    <>
      <Seo
        seoTitle={page.seoTitle}
        seoDescription={page.seoDescription}
        ogImage={heroUrl}
      />
      <Hero img={heroUrl} secondary textCenter>
        <Heading headingLevel="h1" isCenter>
          {page.title}
        </Heading>
        <Breadcrumbs />
      </Hero>

      <Container pt5 as="section">
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
      </Container>
    </>
  );
};

export default ContactPage;
