import { Blog, Home } from "@/types/Schemas";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

const client = createClient(config);

export async function getBlogs(): Promise<Blog[]> {
  return client.fetch(
    groq`*[_type=="blog"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getBlog(slug: string): Promise<Blog> {
  return client.fetch(
    groq`*[_type=="blog" && slug.current==$slug][0] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getHomes(): Promise<Home[]> {
  return client.fetch(
    groq`*[_type=="home"]{
      _id,
      _createdAt,
      title,
      subtitle,
      bannerType,
      titlePosition,
      "profilePicture": profilePicture.asset->url
    }`
  )
}