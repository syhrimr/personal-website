"use client";

import { Home } from "@/types/Schemas"

import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: Home
}

export default function WorkBanner({ params: home}: Props) {
  function toggleCollapsible(itemIndex: number) {
    const items = document.querySelectorAll(`[data-w-item]`);
    items.forEach((item, index) => {
      if (index !== itemIndex) {
        const child = item.querySelector("#collapsible-item");
        child?.classList.add("hidden");
      }
    });
    const item = document.querySelector(`[data-w-item="${itemIndex}"] #collapsible-item`);
    item?.classList.toggle("hidden");
    item?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section>
      <h1 className="text-4xl font-extrabold mb-10">{home.title}</h1>

      {home.works?.map((work, index) => (
        <div
          key={work._id}
          data-w-item={index}
          className="mb-6 last:mb-0 p-6 flex flex-col gap-5 border border-gray-500 rounded-md shadow-md"
        >
          <div className="flex flex-row gap-5" onClick={() => toggleCollapsible(index)}>
            <Image
              src={work.companyIcon}
              alt={work.company}
              width={96}
              height={96}
              className="object-cover h-[96px]"
            />

            <div className="flex flex-1 flex-col justify-center mb-5 cursor-pointer select-none">
              <h2 className="text-2xl font-extrabold">{work.role}</h2>
              <h3 className="font-semibold">{work.company}</h3>
              <p>{work.startDate} - {work.endDate}</p>
            </div>
          </div>

          <div id="collapsible-item" className="hidden">
            <div className="mb-6">
              <PortableText value={work.description} />
            </div>

            <span className="inline-block mb-2 font-semibold">Tech Stacks:</span>
            <ul className="mb-6 flex flex-row items-center gap-4">
              {work.techStacks && work.techStacks.map((tech, index) => (
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

            <span className="inline-block mb-2 font-semibold">Projects:</span>
            <ul className="flex flex-row items-center gap-4">
              {work.projects && work.projects.map((project, index) => (
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
      ))}
    </section>
  )
}