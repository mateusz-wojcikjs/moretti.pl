import React, { FC } from "react";
import { TitleType } from "../../Hero";
import { StyledHeading } from "./Heading.styled";

type headingTag = "h1" | "h2" | "h3";

interface HeadingProps {
  title?: TitleType;
  text?: string;
  headingLevel: headingTag;
  children?: React.ReactNode;
}

interface HeadingTagProps {
  headingLevel: headingTag;
  children: React.ReactNode | string;
}

const RenderHeadingTag: FC<HeadingTagProps> = ({ children, headingLevel }) => {
  switch (headingLevel) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
  }
};

const Heading: FC<HeadingProps> = ({ headingLevel, children }) => {
  return (
    <StyledHeading>
      <RenderHeadingTag headingLevel={headingLevel}>
        {children}
      </RenderHeadingTag>
    </StyledHeading>
  );
};

export default Heading;
