import { PortableTextBlock } from "sanity";

type Basic = {
  _id: string;
  _createdAt: string;
};

type SEOData = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoSlug: string;
  seoImage: string;
};

export type Blog = Basic &
  SEOData & {
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
    tags: string[];
  };

type Project = {
  projectName: string;
  projectUrl: string;
  projectIcon: string;
};

export type Work = Basic & {
  role: string;
  company: string;
  companyIcon: string;
  startDate: string;
  endDate: string;
  description: PortableTextBlock[];
  techStacks: any[];
  projects: Project[];
};

type CTAButton = {
  text: string;
  url: string;
};

export type Home = Basic & {
  title: string;
  subtitle: PortableTextBlock[];
  bannerType: "intro" | "work";
  titlePosition: "left" | "center" | "right";
  profilePicture: string;
  ctaButton?: CTAButton;
  works?: Work[];
};

type Navbar = {
  text: string;
  url: string;
  type: "nav" | "sns";
  snsType: string;
};

export type Header = Basic & {
  title: string;
  navbars: Navbar[];
};

export type PersonalProject = Basic &
  SEOData & {
    title: string;
    slug: string;
    url: string;
    github: string;
    icon: string;
    shortDescription: PortableTextBlock[];
    description: PortableTextBlock[];
    techs: string[];
  };
