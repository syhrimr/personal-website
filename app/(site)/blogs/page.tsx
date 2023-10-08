import BlogCard from "@/app/_components/BlogCard";
import { getBlogs } from "@/sanity/sanity-utils";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <section>
      <h1 className="font-bold text-gray-700 text-3xl mb-5">
        My Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} params={blog} />
        ))}
      </div>
    </section>
  )
}