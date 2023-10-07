import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

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
          {blog.name}
        </h1>
      </header>

      <div className="text-lg text-gray-700">
        <PortableText value={blog.content} />
      </div>
    </div>
  );
}