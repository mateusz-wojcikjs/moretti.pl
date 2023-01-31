import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import * as Utils from "utils";
import { Product } from "interfaces/product.interface";
import { Company } from "components/layout/Footer";

interface CustomAppProps extends AppProps {
  links: string[];
  company: {
    attributes: Company;
  };
}

function MyApp({ Component, pageProps, links, company }: CustomAppProps) {
  const { attributes } = company;

  return (
    <Layout links={links} company={attributes}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const products = await Utils.getProducts();
  const company = await Utils.getCompanyData();
  const links = products.map((product: Product) => product.attributes.name);
  return { links, company };
};

export default MyApp;
