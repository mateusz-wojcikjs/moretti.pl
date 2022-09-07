import React from "react";
import { NextPage } from "next";
import Hero from "../components/Hero";
import HeroImg from "../assets/img/about.jpeg";
import Heading from "../components/common/Heading";
import Breadcrumbs from "../components/common/Breadcrumbs";
import {
  Container,
  Grid,
} from "components/layout/Layout.styled";

const ContactPage: NextPage = () => {
  return <>

    <Hero img={HeroImg} secondary textCenter>
      <Heading headingLevel="h1" isCenter>Kontakt</Heading>
      <Breadcrumbs />
    </Hero>

    <Container pt5 as="section">
      <Grid colCount={2} gap={5}>
        <Heading headingLevel="h2">Skontaktuj się z nami!</Heading>
      </Grid></Container>
  </>;
};

export default ContactPage;
