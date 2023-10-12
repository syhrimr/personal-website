import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/Schemas";
import Balancer from "react-wrap-balancer";

type Props = {
  params: Blog
}

export default function BlogCards({ params: blog }: Props) {
  return(
    <Link
      className="border-2 border-gray-500 rounded-lg overflow-hidden w-[256px] h-[256px] hover:scale-105 hover:border-blue-500 transition"
      href={`/blogs/${blog.slug}`}
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
      <div className="p-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        <Balancer>{blog.name}</Balancer>
      </div>
    </Link>
  );
}