import { getPersonalProjects } from "@/sanity/sanity-utils";

import Balancer from "react-wrap-balancer";
import ProjectCard from "@/app/_components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await getPersonalProjects();

  return (
    <section>
      <div className="mb-12">
        <Balancer>
          <h1 className="font-extrabold text-gray-700 text-7xl mb-4">
            What I&apos;ve created...
          </h1>

          <p className="inline-block">List of personal projects that I&apos;ve created.</p>
        </Balancer>
      </div>

      <div className="flex flex-row flex-wrap gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} params={project} />
        ))}
      </div>
    </section>
  )
}