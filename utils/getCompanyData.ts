import * as Constants from "../constants";

export const getCompanyData = async () => {
  const res = await fetch(
    process.env.API_URL + Constants.COMPONENT_URI.COMPANY,
  );
  const data = await res.json();
  return data.data;
};
