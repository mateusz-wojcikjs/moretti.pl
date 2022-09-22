import { HeroImage } from "./product.interface";
import { PageType } from "../types/page";

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

export interface ContactIcon {
  id: number;
  title: string;
  subTitle: string;
  type: string;
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
  image: FileUrl;
}

export interface AboutPageProps extends PageProps {
  aboutContent: string;
  timelineHeading: string;
  timelineItems: TimelineItem[];
  aboutContentWithImage: AboutContentWithImage;
  ctaAbout: CtaAbout;
  ctaImage: FileUrl;
}

interface ContactPageProps extends PageProps {
  H2: string;
  contactValues: ContactIcon[];
}

export interface IAboutPage {
  page: AboutPageProps;
}

interface Header {
  subTitle: string;
  title: {
    top: string;
    bottom: string;
  };
  heroImage: HeroImage;
}

interface HomePageProps extends PageProps {
  header: Header;
  mainText: string;
  image: FileUrl;
}

export interface IHomePage {
  page: HomePageProps;
}

export interface IContactPage {
  page: ContactPageProps;
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

export interface Pages {
  HOME: PageType;
  CONTACT: PageType;
  ABOUT: PageType;
  OFFER: PageType;
  PRIVACY: PageType;
}
