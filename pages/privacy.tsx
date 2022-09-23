import * as Constants from "../constants";
import { getPageData } from "../utils";
import React from "react";
import Seo from "../components/Seo";
import { Container } from "components/layout/Layout.styled";

interface PrivacyPolicyPageProps {
  page: {
    seoTitle: string;
    seoDescription: string;
    content: string;
  };
}

export const getStaticProps = async () => {
  const page = await getPageData(Constants.PAGE_TYPES.PRIVACY);
  return {
    props: { page },
  };
};

const PrivacyPolicyPage = ({ page }: PrivacyPolicyPageProps) => {
  const heroUrl = "";
  return (
    <>
      <Seo
        seoTitle={page.seoTitle}
        seoDescription={page.seoDescription}
        ogImage={heroUrl}
      />
      <Container>
        <div
          className="privacy"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;
