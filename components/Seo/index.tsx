import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface ISeo {
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
}

const Seo = ({ seoTitle, seoDescription, ogImage }: ISeo) => {
  const siteName = "Moretti Macchine";
  const ogType = "website";
  const domain = process.env.BASE_URL;
  const { asPath } = useRouter();
  const canonical = domain + asPath;
  return (
    <Head>
      <title>
        {seoTitle} - {siteName}
      </title>
      <meta name="description" content={seoDescription} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta property="og:locale" content="pl_PL" />
      <meta key="og_title" property="og:title" content={seoTitle} />
      <meta
        key="og_description"
        property="og:description"
        content={seoDescription}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? domain} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_image" property="og:image" content={ogImage} />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${seoTitle} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" property="twitter:title" content={seoTitle} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={seoDescription}
      />

      <link rel="canonical" href={canonical ?? domain} />

      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
