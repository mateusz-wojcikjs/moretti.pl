export const URI = {
  HOME: "home?populate=header.heroImage,header.title,image",
  ABOUT:
    "about?populate=heroImage,timelineItems,ctaImage,ctaAbout.iconWithText.icon,ctaAbout.iconWithText.icon,aboutContentWithImage.image",
  CONTACT: "contact?populate=heroImage,contactValues",
  PRIVACY: "privacy",
  OFFER: "offer?populate=header.heroImage,header.title",
  PRODUCT_FILTER_BY_SLUG: "products?filters[slug][$eq]=",
  PRODUCT: "products/",
  PRODUCT_DATA:
    "?populate[0]=gallery,heroImage,descriptionBottomWithImage.image,slidersPhotos",
};
