import * as Constants from "../constants";

export const getCustomers = async () => {
  const res = await fetch(
    process.env.API_URL + Constants.COMPONENT_URI.CUSTOMERS,
  );
  const data = await res.json();
  return data.data;
};
