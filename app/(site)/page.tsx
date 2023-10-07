import { getBlogs, getHomes } from "@/sanity/sanity-utils";
import BlogCard from "../_components/BlogCard";
import HomeBanner from "../_components/HomeBanner";

export default async function Home() {
  const blogs = await getBlogs();
  const homes = await getHomes();
  
  return (
    <div>
      <div>
        {homes.map((home) => (
          <HomeBanner key={home._id} params={home} />
        ))}
      </div>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        My Blogs
      </h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} params={blog} />
        ))}
      </div>
    </div>
  )
}
