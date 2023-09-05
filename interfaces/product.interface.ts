import { Testimonial } from "../components/Testimonials";
import { Partner } from "../components/layout/Partners";
import { CtaProps } from "../components/common/Cta";

export interface PageParameters {
  params: { slug: string };
}

export interface ImageData {
  data: {
    id: number;
    attributes: {
      url: string;
      formats: ImageSizes;
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
      url: string;
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

export interface ProductTemplateProps {
  product: Product;
  testimonials: Testimonial[];
  customers: Partner[];
  cta: CtaProps;
}

export interface RichTextComp {
  id: number;
  textContent: string;
  image: { data: ImageProps };
}

type RTC = RichTextComp;

export interface ProductAttributes {
  seoTitle: string;
  seoDescription: string;
  name: string;
  slug: string;
  descriptionTop: string;
  descriptionBottom?: string;
  descriptionBottomWithImage?: RTC[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroImage: HeroImage;
  slidersPhotos: { data: ImageProps[] };
  gallery: { data: ImageProps[] };
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface ImageProps {
  id: number;
  attributes: {
    url: string;
    formats: ImageSizes;
    hash: string;
    alternativeText: string;
  };
}
