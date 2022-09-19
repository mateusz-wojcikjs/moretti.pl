import React from "react";
import { NextPage } from "next";
import { PageParameters, ProductResponse } from "interfaces/product.interface";
import ProductTemplate from "components/templates/ProductTemplate";
import { getProduct } from "utils/getProduct";
import { getProductsPaths } from "utils/getProductsPaths";

export async function getStaticPaths() {
  return getProductsPaths();
}

export const getStaticProps = ({ params }: PageParameters) => {
  const { slug } = params;
  return getProduct(slug);
};

const OfferPage: NextPage<ProductResponse> = ({ productData }) => {
  return <ProductTemplate data={productData.data} />;
};

export default OfferPage;
