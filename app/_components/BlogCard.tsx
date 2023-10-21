import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import CustomTags from "./CustomTags";

import { Blog } from "@/types/Schemas";

import { parseISO, format } from "date-fns";

type Props = {
  params: Blog;
};

export default function BlogCards({ params: blog }: Props) {
  const publishedDate = format(parseISO(blog._createdAt), "dd MMMM yyyy");

  return (
    <Link
      className="flex flex-col border-2 border-gray-500 rounded-lg overflow-hidden w-[256px] h-[256px] justify-self-center hover:scale-105 hover:border-blue-500 transition"
      href={`/blogs/${blog.slug}`}
      title={blog.name}
    >
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.name}
          width={256}
          height={128}
          className="object-none w-[256px] h-[128px]"
        />
      )}

      <div className="flex flex-col flex-1 gap-1 p-2">
        <div className="">
          <CustomTags data={blog.tags} expand={false} tagClassess="tag-card" />
        </div>

        <div className="font-extrabold text-gradient-primary flex-1">
          <Balancer>{blog.name}</Balancer>
        </div>

        <div className="flex flex-row items-center gap-2 mb-1">
          <svg
            className="opacity-75"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="12"
            height="12"
            viewBox="0 0 97.16 97.16"
          >
            <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"></path>
            <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"></path>
          </svg>
          <span className="text-sm">{publishedDate}</span>
        </div>
      </div>
    </Link>
  );
}
