import { getPersonalProject } from "@/sanity/sanity-utils";

import Balancer from "react-wrap-balancer";
import Link from "next/link";
import CustomRenderBlock from "@/app/_components/CustomRenderBlock";
import CustomTags from "@/app/_components/CustomTags";
import CustomCTAButton from "@/app/_components/CustomCTAButton";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export async function generateMetadata({ params }: Props) {
  const slug = params.project;
  const project = await getPersonalProject(slug);

  const baseUrl = "https://syhrimr.vercel.app";

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    metadabase: new URL(`${baseUrl}`),
    openGraph: {
      title: `${project.seoTitle}`,
      description: project.seoDescription,
      url: `${baseUrl}/projects/${project.seoSlug}`,
      images: [
        {
          url: project.seoImage,
          width: 256,
          height: 256
        }
      ],
      siteName: `Syahri Website`,
      locale: "en_US",
      type: "website"
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const slug = params.project;
  const project = await getPersonalProject(slug);

  return (
    <div className="w-full">
      <header className="flex flex-col justify-between gap-4 mb-6">
        <Link className="block sm:hidden mb-6" href={`/projects`}>
          <span className="text-gradient-primary font-extrabold">← Back</span>
        </Link>

        <div className="flex flex-row mb-4 sm:mb-0 items-center gap-4">
          <Image
            src={project.icon}
            alt={project.title}
            width={48}
            height={48}
          />

          <h1 className="mb-4 text-gradient-primary text-5xl drop-shadow font-extrabold -z-10">
            <Balancer>{project.title}</Balancer>
          </h1>
        </div>

        <div className="flex flex-row">
          <p className="w-[96px] font-semibold mr-2">Links</p>
          <div className="flex flex-row gap-4">
            <CustomCTAButton
              url={project.url}
              text="View Project"
              type="link"
              icon="website"
            />
            <CustomCTAButton
              url={project.github}
              text="Source Code"
              type="link"
              icon="github"
            />
          </div>
        </div>

        <div className="flex flex-row">
          <p className="w-[96px] font-semibold mr-2">Tech Stacks</p>
          <span className="flex flex-row gap-2">
            <CustomTags data={project.techs} expand tagClassess="tag-inline" />
          </span>
        </div>
      </header>

      <hr className="h-px my-8 bg-gray-200 border-0"></hr>

      <div className="text-lg text-gray-700">
        <CustomRenderBlock params={project.description} />
      </div>
    </div>
  );
}
