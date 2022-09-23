export const getProduct = async (slug: string) => {
  const res = await fetch(
    process.env.API_URL + `products?filters[slug][$eq]=${slug}`,
  );
  const data = await res.json();
  const [{ id }] = data.data;

  const productRes = await fetch(
    process.env.API_URL +
      `products/${id}?populate[0]=gallery,heroImage,descriptionBottomWithImage.image`,
  );
  return await productRes.json();
};
