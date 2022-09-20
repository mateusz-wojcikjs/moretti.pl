import React from "react";
import Heading from "../Heading";
import Button from "../Button";
import Box from "icons/box";
import { Feature, StyledFeatures } from "./Features.styled";
import AnimatedOnScroll from "../../AnimatedOnScroll";

const Features = () => {
  return (
    <AnimatedOnScroll>
      <StyledFeatures colCount={2} gap={1}>
        <div>
          <Heading headingLevel="h3">Postaw na nowoczesne rozwiązania!</Heading>
          <Button link="/oferta" type="primary" text="Czytaj więcej" />
        </div>
        <div className="features-box">
          <Feature>
            <div className="feature-icon">
              <Box />
            </div>
            <Heading headingLevel="h4">WIELOLETNIE DOŚWIADCZENIE</Heading>
            <p className="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Feature>
          <Feature>
            <div className="feature-icon">
              <Box />
            </div>
            <Heading headingLevel="h4">WIELOLETNIE DOŚWIADCZENIE</Heading>
            <p className="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Feature>
          <Feature>
            <div className="feature-icon">
              <Box />
            </div>
            <Heading headingLevel="h4">WIELOLETNIE DOŚWIADCZENIE</Heading>
            <p className="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Feature>
          <Feature>
            <div className="feature-icon">
              <Box />
            </div>
            <Heading headingLevel="h4">WIELOLETNIE DOŚWIADCZENIE</Heading>
            <p className="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Feature>
        </div>
      </StyledFeatures>
    </AnimatedOnScroll>
  );
};

export default Features;
