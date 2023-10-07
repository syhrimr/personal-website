import { getBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const blogs = await getBlogs();
  
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Syahri
        </span>
        !
      </h1>

      <p className="mt-3 text-xl text-gray-500">
        Aloha everyone! Check out my latest blogs.
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        My Blogs
      </h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            className="border-2 border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition"
            href={`/blogs/${blog.slug}`}
          >
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {blog.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
