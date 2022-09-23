import React from "react";
import { NextPage } from "next";
import { PageParameters, ProductResponse } from "interfaces/product.interface";
import ProductTemplate from "components/templates/ProductTemplate";
import { getProductsPaths } from "utils/getProductsPaths";
import * as Utils from "../../utils";

export async function getStaticPaths() {
  return getProductsPaths();
}

export const getStaticProps = async ({ params }: PageParameters) => {
  const { slug } = params;
  const productData = await Utils.getProduct(slug);
  const product = productData.data;
  const testimonials = await Utils.getTestimonials();
  const customers = await Utils.getCustomers();
  const cta = await Utils.getCta();
  return {
    props: { product, testimonials, customers, cta },
  };
};

const OfferPage: NextPage<ProductResponse> = (props) => {
  return <ProductTemplate data={props} />;
};

export default OfferPage;
