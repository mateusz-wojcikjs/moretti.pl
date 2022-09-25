import * as Constants from "../constants";

export const getProduct = async (slug: string) => {
  const res = await fetch(
    process.env.API_URL + Constants.URI.PRODUCT_FILTER_BY_SLUG + slug,
  );
  const data = await res.json();
  const [{ id }] = data.data;

  const productRes = await fetch(
    process.env.API_URL +
      Constants.URI.PRODUCT +
      id +
      Constants.URI.PRODUCT_DATA,
  );
  return await productRes.json();
};
