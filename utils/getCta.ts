import * as Constants from "../constants";

export const getCta = async () => {
  const res = await fetch(process.env.API_URL + Constants.COMPONENT_URI.CTA);
  const data = await res.json();
  return data.data;
};
