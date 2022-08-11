import { NextPage } from "next";
import React from "react";
import {
  Container,
  FullSectionGray,
  InnerWrapper,
} from "../components/layout/Layout.styled";
import CounterNumber from "../components/common/CounterNumber";
import Cta from "../components/common/Cta";
import Testimonials from "../components/Testimonials";
import Partners from "../components/layout/Partners";

const AboutPage: NextPage = () => {
  return (
    <>
      <h1>about page</h1>
      <FullSectionGray>
        <InnerWrapper>
          <CounterNumber />
        </InnerWrapper>
        <Cta />
      </FullSectionGray>

      <Container>
        <Testimonials />
      </Container>
      <Partners />
    </>
  );
};

export default AboutPage;
