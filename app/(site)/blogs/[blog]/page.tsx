import { getBlog } from "@/sanity/sanity-utils";

import Balancer from "react-wrap-balancer"
import CustomRenderBlock from "@/app/_components/CustomRenderBlock";
import Link from "next/link";

type Props = {
  params: { blog: string }
}

export default async function BlogPage({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  
  return(
    <div className="w-full">
      <header className="flex flex-col justify-between">
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
      </header>

      <div className="text-lg text-gray-700 border border-gray-600">
        <CustomRenderBlock params={blog.content} />
      </div>
    </div>
  );
}