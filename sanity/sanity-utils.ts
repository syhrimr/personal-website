import { Blog, Home, Work, Header, PersonalProject } from "@/types/Schemas";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export const client = createClient(config);

export async function getBlogs(): Promise<Blog[]> {
  return client.fetch(
    groq`*[_type=="blog"] | order(_createdAt desc){
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      tags
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
      content,
      tags
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
      "profilePicture": profilePicture.asset->url,
      ctaButton,
      "works": work[]->{
        _type == 'reference' => @->,
        _type != 'reference' => @,
        "companyIcon": companyIcon.asset->url,
        "techStacks": techStacks[].asset->url,
        "projects": projects[]->{
          _type == 'reference' => @->,
          _type != 'reference' => @,
          "projectIcon": projectIcon.asset->url
        }
      }
    }`
  )
}

export async function getWorks(): Promise<Work[]> {
  return client.fetch(
    groq`*[_type=="work"]{
      _id,
      _createdAt,
      role,
      company,
      "companyIcon": companyIcon.asset->url,
      startDate,
      endDate,
      description,
      "techStacks": techStacks[].asset->url,
      "projects": projects[]
    }`
  )
}

export async function getHeader(): Promise<Header> {
  return client.fetch(
    groq`*[_type=="header"][0]{
      _id,
      _createdAt,
      title,
      "navbars": navbar[]->{
        _type == 'reference' => @->,
        _type != 'reference' => @
      }
    }`
  )
}

export async function getPersonalProjects(): Promise<PersonalProject[]> {
  return client.fetch(
    groq`*[_type=="personalProject"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      url,
      github,
      "icon": icon.asset->url,
      description,
      techs
    }`
  )
}

export async function getPersonalProject(slug: string): Promise<PersonalProject> {
  return client.fetch(
    groq`*[_type=="personalProject" && slug.current==$slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      url,
      github,
      "icon": icon.asset->url,
      description,
      techs
    }`,
    { slug }
  )
}