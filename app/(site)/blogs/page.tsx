import BlogCard from "@/app/_components/BlogCard";
import { getBlogs } from "@/sanity/sanity-utils";
import Balancer from "react-wrap-balancer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "List of personal blogs and documentation",
  openGraph: {
    title: "Blogs",
    description: "List of personal projects",
    siteName: "Syahri Website",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs",
    description: "List of personal projects"
  }
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <section>
      <div className="mb-12">
        <Balancer>
          <h1 className="font-extrabold text-gray-700 text-7xl mb-4">
            What I&apos;ve learned...{" "}
          </h1>

          <p className="inline-block">
            A blog or documentation page to store for everything that I&apos;ve
            experienced or learned from any media or working experiences.
          </p>
        </Balancer>
      </div>

      <div className="flex flex-row flex-wrap gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} params={blog} />
        ))}
      </div>
    </section>
  );
}
