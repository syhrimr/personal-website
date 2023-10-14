import { getBlog } from "@/sanity/sanity-utils";
import { parseISO, format } from "date-fns";

import Balancer from "react-wrap-balancer"
import CustomRenderBlock from "@/app/_components/CustomRenderBlock";
import Link from "next/link";
import CustomTags from "@/app/_components/CustomTags";

type Props = {
  params: { blog: string }
}

export default async function BlogPage({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  const publishedDate = format(parseISO(blog._createdAt), "dd MMMM yyyy");
  
  return(
    <div className="w-full">
      <header className="flex flex-col justify-between mb-6">
        <Link
          className="block sm:hidden mb-6"
          href={`/blogs`}
        >
          <span className="text-gradient-primary font-extrabold">
            ← Back
          </span>
        </Link>
        <h1 className="mb-8 text-gradient-primary text-5xl drop-shadow font-extrabold">
          <Balancer>{blog.name}</Balancer>
        </h1>
        <div className="flex flex-row gap-2 mb-1">
          <p className="w-[96px] font-semibold">Published</p>
          <span>{publishedDate}</span>
        </div>
        <div className="flex flex-row gap-2">
          <p className="w-[96px] font-semibold">Tags</p>
          <span className="flex flex-row gap-2">
            <CustomTags data={blog.tags} tagClassess="tag-inline" />
          </span>
        </div>
      </header>

      <hr className="h-px my-8 bg-gray-200 border-0"></hr>

      <div className="text-lg text-gray-700">
        <CustomRenderBlock params={blog.content} />
      </div>
    </div>
  );
}