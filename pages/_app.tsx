import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import * as Utils from "utils";
import { Product } from "interfaces/product.interface";
import { Company } from "components/layout/Footer";
import { useEffect, useState } from "react";

interface CustomAppProps extends AppProps {
  links: string[];
  company: {
    attributes: Company;
  };
}

function MyApp({ Component, pageProps, links, company }: CustomAppProps) {
  const { attributes } = company;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  if (!loading)
    return (
      <Layout links={links} company={attributes}>
        <Component {...pageProps} />
      </Layout>
    );

  return (
    <div className="lll">
      <div id="loader">
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
    </div>
  );
}

MyApp.getInitialProps = async () => {
  const products = await Utils.getProducts();
  const company = await Utils.getCompanyData();
  const links = products.map((product: Product) => product.attributes.name);
  return { links, company };
};

export default MyApp;
