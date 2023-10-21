import { getPersonalProjects } from "@/sanity/sanity-utils";

import Balancer from "react-wrap-balancer";
import ProjectCard from "@/app/_components/ProjectCard";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "List of personal projects",
  metadataBase: new URL("https://syhrimr.vercel.app"),
  openGraph: {
    title: "Syahri - Blogs",
    description: "List of personal blogs and documentation",
    url: "https://syhrimr.vercel.app/blogs",
    siteName: "syhrimr",
    locale: "en_US",
    type: "website"
  }
};

export default async function ProjectsPage() {
  const projects = await getPersonalProjects();

  return (
    <section>
      <div className="mb-12">
        <Balancer>
          <h1 className="font-extrabold text-gray-700 text-7xl mb-4">
            What I&apos;ve created...
          </h1>

          <p className="inline-block">
            List of personal projects that I&apos;ve created.
          </p>
        </Balancer>
      </div>

      <div className="flex flex-row flex-wrap gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} params={project} />
        ))}
      </div>
    </section>
  );
}
