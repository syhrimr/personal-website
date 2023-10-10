import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Balancer from "react-wrap-balancer";

type Props = {
  params: { blog: string }
}

export default async function BlogPage({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  
  return(
    <div>
      <header className="flex items-center justify-between mb-5">
        <h1 className="text-gradient-primary text-5xl drop-shadow font-extrabold">
          <Balancer>{blog.name}</Balancer>
        </h1>
      </header>

      <div className="text-lg text-gray-700">
        <Balancer>
          <PortableText value={blog.content} />
        </Balancer>
      </div>
    </div>
  );
}