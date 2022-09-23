import * as Constants from "../constants";

export const getFeatures = async () => {
  const res = await fetch(
    process.env.API_URL + Constants.COMPONENT_URI.FEATURE,
  );
  const data = await res.json();
  return data.data;
};
