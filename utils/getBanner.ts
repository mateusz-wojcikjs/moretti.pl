import * as Constants from "../constants";

export const getBanner = async () => {
  const res = await fetch(process.env.API_URL + Constants.COMPONENT_URI.BANNER);
  const data = await res.json();
  return data.data;
};
