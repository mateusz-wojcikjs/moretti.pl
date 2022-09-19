export const getProduct = async (slug: string) => {
  const res = await fetch(
    `http://localhost:1337/api/products?filters[slug][$eq]=${slug}`,
  );
  const data = await res.json();
  const [{ id }] = data.data;

  const productRes = await fetch(
    `http://localhost:1337/api/products/${id}?populate[0]=gallery,heroImage,descriptionBottomWithImage.image`,
  );
  const productData = await productRes.json();
  return {
    props: {
      productData,
    },
  };
};

export const getProducts = async () => {
  const res = await fetch(`http://localhost:1337/api/products`);
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
};
