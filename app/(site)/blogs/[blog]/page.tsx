import { getBlog } from "@/sanity/sanity-utils";

import Balancer from "react-wrap-balancer"
import CustomRenderBlock from "@/app/_components/CustomRenderBlock";

type Props = {
  params: { blog: string }
}

export default async function BlogPage({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  
  return(
    <div className="w-full">
      <header className="flex items-center justify-between mb-5">
        <h1 className="mb-8 text-gradient-primary text-5xl drop-shadow font-extrabold">
          <Balancer>{blog.name}</Balancer>
        </h1>
      </header>

      <div className="text-lg text-gray-700">
        <CustomRenderBlock params={blog.content} />
      </div>
    </div>
  );
}