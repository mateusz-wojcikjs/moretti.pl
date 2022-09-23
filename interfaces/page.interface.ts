import { HeroImage, Product } from "./product.interface";
import { PageType } from "../types/page";
import { Testimonial } from "../components/Testimonials";
import { Partner } from "../components/layout/Partners";
import { CtaProps } from "../components/common/Cta";

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

export interface HomePageProps extends PageProps {
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

export interface OffersPageProps extends PageProps {
  header: OffersPageHeaderProps;
}

interface OffersPageHeaderProps {
  title: {
    top: string;
    bottom: string;
  };
  subTitle: string;
  heroImage: FileUrl;
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

interface FeaturesAttributes {
  title: string;
  iconWithText: IconWithText[];
}

export interface FeaturesProps {
  id: number;
  attributes: FeaturesAttributes;
}

export interface CounterProps {
  id: number;
  count: string;
  description: string;
}

export interface CountersProps {
  id: number;
  attributes: { counter: CounterProps[] };
}

interface BannerAttributes {
  title: string;
  backgroundImage: FileUrl;
}

interface BannerProps {
  id: number;
  attributes: BannerAttributes;
}

export interface HomePageStaticProps {
  products: Product[];
  page: HomePageProps;
  testimonials: Testimonial[];
  customers: Partner[];
  cta: CtaProps;
  banner: BannerProps;
  features: FeaturesProps;
  counters: CountersProps;
}
