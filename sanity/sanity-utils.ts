import { Blog } from "@/types/Blog";
import { createClient, groq } from "next-sanity";

export async function getBlogs(): Promise<Blog[]> {
  const client = createClient({
    projectId: 'zbyhb19n',
    dataset: 'production',
    apiVersion: "2023-10-06",
  });

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