import * as Constants from "../constants";

export const getCounters = async () => {
  const res = await fetch(
    process.env.API_URL + Constants.COMPONENT_URI.COUNTER,
  );
  const data = await res.json();
  return data.data;
};
