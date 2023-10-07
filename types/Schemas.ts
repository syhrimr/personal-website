import { PortableTextBlock } from "sanity";

type Basic = {
  _id: string,
  _createdAt: Date
}

export type Blog = Basic & {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}

export type Home = Basic & {
  title: string;
  subtitle: PortableTextBlock[];
  bannerType: 'intro' | 'work';
  titlePosition: 'left' | 'center' | 'right';
  profilePicture: string;
}