import { getBlogs } from "@/sanity/sanity-utils";

export default async function Home() {
  const blogs = await getBlogs();
  
  return <div>
    {blogs.map((blog) => (
      <div key={blog._id}>{blog.name}</div>
    ))}
  </div>
}
