import React from "react";
import Heading from "../Heading";
import Button from "../Button";
import Box from "icons/box";
import { Feature, StyledFeatures } from "./Features.styled";
import AnimatedOnScroll from "../../AnimatedOnScroll";
import { FeaturesProps } from "../../../pages";

const Features = ({ data }: { data: FeaturesProps }) => {
  return (
    <AnimatedOnScroll>
      <StyledFeatures colCount={2} gap={1}>
        <div>
          <Heading headingLevel="h3">{data.attributes.title}</Heading>
          <Button link="/oferta" type="primary" text="Czytaj więcej" />
        </div>
        <div className="features-box">
          {data.attributes.iconWithText.map((feature) => {
            return (
              <Feature key={feature.id}>
                <div className="feature-icon">
                  <Box />
                </div>
                <Heading headingLevel="h4">{feature.title}</Heading>
                <p className="feature-description">{feature.subTitle}</p>
              </Feature>
            );
          })}
        </div>
      </StyledFeatures>
    </AnimatedOnScroll>
  );
};

export default Features;
