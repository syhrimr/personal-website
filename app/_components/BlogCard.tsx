import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/Schemas";

type Props = {
  params: Blog
}

export default function BlogCards({ params: blog }: Props) {
  return(
    <Link
      className="border-2 border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500 transition"
      href={`/blogs/${blog.slug}`}
    >
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.name}
          width={750}
          height={300}
          className="object-cover rounded-lg"
        />
      )}
      <div className="p-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        {blog.name}
      </div>
    </Link>
  );
}