export const getPageData = async () => {
  const res = await fetch(
    "http://localhost:1337/api/about?populate=heroImage,timelineItems,ctaImage,ctaAbout.iconWithText.icon,ctaAbout.iconWithText.icon,aboutContentWithImage.image",
  );
  const pageData = await res.json();
  const page = pageData.data.attributes;
  return {
    props: {
      page,
    },
  };
};
