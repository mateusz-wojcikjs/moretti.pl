import { HeroImage } from "./product.interface";

export interface TimelineItem {
  id: number;
  year: string;
  content: string;
}

export interface TimelineItems {
  timelineItems: TimelineItem[];
}

export interface IconWithText {
  id: number;
  title: string;
  subTitle: string;
  icon: FileUrl;
}

export interface CtaAbout {
  id: number;
  title: string;
  ctaAboutContent: string;
  iconWithText: IconWithText[];
}

export interface AboutContentWithImage {
  id: number;
  title: string;
  listTitle: string;
  textContent: string;
  wideText: string;
  image: string;
}

export interface AboutPageProps extends PageProps {
  aboutContent: string;
  timelineHeading: string;
  timelineItems: TimelineItem[];
  aboutContentWithImage: AboutContentWithImage;
  ctaAbout: CtaAbout;
  ctaImage: any;
}

export interface Page {
  page: AboutPageProps;
}

export interface PageProps {
  seoTitle: string;
  seoDescription: string;
  title: string;
  heroImage: HeroImage;
}

export interface FileUrl {
  data: { attributes: { url: string } };
}
