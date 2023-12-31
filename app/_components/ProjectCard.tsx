import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import CustomTags from "./CustomTags";

import { PersonalProject } from "@/types/Schemas";

import { parseISO, format } from "date-fns";
import CustomRenderBlock from "./CustomRenderBlock";

type Props = {
  params: PersonalProject;
};

export default function ProjectCard({ params: project }: Props) {
  const publishedDate = format(parseISO(project._createdAt), "dd MMMM yyyy");

  return (
    <Link
      className="flex flex-col border-2 border-gray-500 rounded-lg overflow-hidden w-[256px] h-[256px] justify-self-center hover:scale-105 hover:border-blue-500 transition"
      href={`/projects/${project.slug}`}
      title={project.title}
    >
      {project.icon && (
        <div className="max-h-32 overflow-hidden flex justify-center">
          <Image
            src={project.icon}
            alt={project.title}
            width={128}
            height={128}
            className="object-none w-[128px] h-[128px]"
            style={{ height: "auto" }}
          />
        </div>
      )}

      <div className="flex flex-col flex-1 gap-1 p-2">
        <div className="mb-2">
          <CustomTags
            data={project.techs}
            expand={false}
            tagClassess="tag-card"
          />
        </div>

        <div className="font-extrabold text-gradient-primary">
          <Balancer>{project.title}</Balancer>
        </div>

        <div className="block-ellipsis mb-1">
          <CustomRenderBlock params={project.shortDescription} />
        </div>
      </div>
    </Link>
  );
}
