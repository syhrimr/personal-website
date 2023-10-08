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
    </div>
  )
}
