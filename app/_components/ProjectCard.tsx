import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import CustomTags from "./CustomTags";

import { PersonalProject } from "@/types/Schemas";

import { parseISO, format } from "date-fns";

type Props = {
  params: PersonalProject
}

export default function ProjectCard({ params: project }: Props) {
  const publishedDate = format(parseISO(project._createdAt), "dd MMMM yyyy");

  return (
    <Link
      className="flex flex-col border-2 border-gray-500 rounded-lg overflow-hidden w-[256px] h-[256px] justify-self-center hover:scale-105 hover:border-blue-500 transition"
      href={`/projects/${project.slug}`}
      title={project.title}
    >
      {project.icon && (
        <Image
          src={project.icon}
          alt={project.title}
          width={256}
          height={128}
          className="object-none w-[256px] h-[128px]"
        />
      )}

      <div className="flex flex-col flex-1 gap-1 p-2">
        <div className="mb-2">
          <CustomTags data={project.techs} tagClassess="tag-card" />
        </div>

        <div className="font-extrabold text-gradient-primary flex-1">
          <Balancer>{project.title}</Balancer>
        </div>
      </div>
    </Link>
  )
}