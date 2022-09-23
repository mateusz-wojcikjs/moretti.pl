import * as Constants from "../constants";

export const getProducts = async () => {
  const res = await fetch(
    process.env.API_URL + Constants.COMPONENT_URI.PRODUCTS_LIST,
  );
  const data = await res.json();
  return data.data;
};
