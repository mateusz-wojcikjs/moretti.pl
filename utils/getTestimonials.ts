import * as Constants from "../constants";

export const getTestimonials = async () => {
  const res = await fetch(
    process.env.API_URL + Constants.COMPONENT_URI.TESTIMONIALS,
  );
  const data = await res.json();
  return data.data;
};
