export interface PageParameters {
  params: { slug: string };
}

export interface ImageData {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}

export interface ProductData {
  data: Product;
  meta?: {};
}

export interface ProductsData {
  data: Product[];
  meta?: {};
}

export interface IProductItem {
  name: string;
  descriptionTop: string;
  thumbnail: HeroImage;
}

export interface HeroImage {
  data: {
    attributes: {
      formats: ImageSizes;
    };
  };
}

export interface ImageSizes {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  thumbnail: {
    url: string;
  };
}

export interface ProductResponse {
  productData: ProductData;
}

export interface RichTextComp {
  id: number;
  textContent: string;
  image: ImageData;
}

type RTC = RichTextComp;

export interface ProductAttributes {
  seoTitle: string;
  seoDescription: string;
  name: string;
  slug: string;
  descriptionTop: string;
  descriptionBottom?: string;
  descriptionBottomWithImage: RTC[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroImage: HeroImage;
  slidersPhotos?: string;
  gallery?: string;
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}
