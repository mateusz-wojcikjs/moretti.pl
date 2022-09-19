import { Product } from "interfaces/product.interface";

export const getProductsPaths = async () => {
  const res = await fetch("http://localhost:1337/api/products/");
  const { data: products } = await res.json();

  const paths = products.map((product: Product) => ({
    params: {
      slug: product.attributes.slug,
    },
  }));

  return { paths, fallback: false };
};
