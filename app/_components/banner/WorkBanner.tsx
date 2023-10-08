"use client";

import { Home } from "@/types/Schemas"

import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: Home
}

export default function WorkBanner({ params: home}: Props) {
  function toggleCollapsible(index: number) {
    const item = document.querySelector(`[data-w-item="${index}"] #collapsible-item`);
    item?.classList.toggle("hidden");
    item?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section>
      <h1 className="text-4xl font-extrabold mb-10">{home.title}</h1>

      {home.works?.map((work, index) => (
        <div key={work._id} className="flex flex-row gap-5">
          <Image
            src={work.companyIcon}
            alt={work.company}
            width={96}
            height={96}
            className="object-cover h-[96px]"
          />

          <div data-w-item={index}>
            <div
              className="flex flex-col mb-5 cursor-pointer select-none"
              onClick={() => toggleCollapsible(index)}
            >
              <h2 className="text-2xl font-extrabold">{work.role}</h2>
              <h3 className="font-semibold">{work.company}</h3>
              <p>{work.startDate} - {work.endDate}</p>
            </div>

            <div id="collapsible-item" className="hidden flex flex-col gap-4">
              <div>
                <PortableText value={work.description} />
              </div>

              <span className="mr-4 font-semibold">Tech Stacks:</span>
              <ul className="flex flex-row items-center gap-4">
                {work.techStacks.map((tech, index) => (
                  <li key={index}>
                    <Image
                      src={tech}
                      alt={work.company}
                      width={36}
                      height={36}
                      className="object-cover h-[36px]"
                    />
                  </li>
                ))}
              </ul>

              <span className="font-semibold">Projects:</span>
              <ul className="flex flex-row items-center gap-4">
                {work.projects.map((project, index) => (
                  <Link key={index} href={project.projectUrl}>
                    <li className="p-4 border border-gray-500 w-[96px] hover:scale-110 shadow-md">
                      <Image
                        src={project.projectIcon}
                        alt={project.projectName}
                        width={36}
                        height={36}
                        className="object-cover h-[36px] mx-auto mb-2"
                      />
                      <span className="inline-block w-full text-center">{project.projectName}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}