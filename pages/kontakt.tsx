import React from "react";
import { NextPage } from "next";
import Hero from "../components/Hero";
import HeroImg from "../assets/img/about.jpeg";
import Heading from "../components/common/Heading";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Container, Grid } from "components/layout/Layout.styled";
import ListIconItem from "../components/common/ListIconItem";
import PhoneIcon from "../icons/phone";
import EmailIcon from "../icons/email";
import ContactIcon from "../icons/contact";
import Button from "../components/common/Button";

const ContactPage: NextPage = () => {
  const mockContactData = {
    tel: {
      type: "tel",
      icon: "ICON",
      title: "Numer telefonu",
      content: "+48 664 412 061",
    },
    email: {
      type: "email",
      icon: "ICON",
      title: "Adres e-mail",
      content: "moretti@moretti.pl",
    },
    company: {
      type: "company",
      icon: "ICON",
      title: "Dane firmy",
      content: "Moretti Machine\nul. Duńska 3\n64-100 Leszno",
    },
  };

  return (
    <>
      <Hero img={HeroImg} secondary textCenter>
        <Heading headingLevel="h1" isCenter>
          Kontakt
        </Heading>
        <Breadcrumbs />
      </Hero>

      <Container pt5 as="section">
        <Grid colCount={2} gap={5}>
          <div>
            <Heading headingLevel="h2">Skontaktuj się z nami!</Heading>
            <ListIconItem data={mockContactData.tel} icon={<PhoneIcon />} />
            <ListIconItem data={mockContactData.email} icon={<EmailIcon />} />
            <ListIconItem
              data={mockContactData.company}
              icon={<ContactIcon />}
            />
          </div>
          <div>
            <form>
              <input type="text" />
              <input type="email" />
              <input type="text" />
              <textarea name="message" id="message"></textarea>
              <Button link="/" type="primary" text="Wyślij" />
            </form>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default ContactPage;
