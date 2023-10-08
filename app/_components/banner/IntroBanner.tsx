import { Home } from "@/types/Schemas"

import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: Home
}

type CTAButtonProps = {
  text: string | undefined;
  url: string | undefined;
}

export default function IntroBanner({ params: home }: Props) {
  function CTAButton({ text, url }: CTAButtonProps) {
    if (!url && !text) {
      return null;
    }

    return (
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="h-[48px] w-[150px] p-4 pt-3 block bg-gradient-primary text-white rounded-md shadow-sm hover:scale-110 hover:shadow-md"
      >
        <span className="block text-center font-semibold">
          {text}
        </span>
      </a>
    );
  }

  return (
    <section className="flex flex-row items-center gap-5 mb-20">
      <Image
        src={home.profilePicture}
        alt={home.title}
        width={240}
        height={240}
        className="object-cover rounded-full hidden sm:block"
      />

      <div>
        <h1 className="text-7xl font-extrabold mb-6">
          Hi, I&apos;m{" "}
          <span className="text-gradient-primary">
            {home.title}
          </span>
          !
        </h1>
  
        <div className="text-xl text-gray-500 mb-8">
          <PortableText value={home.subtitle} />
        </div>

        <div>
          <CTAButton url={home.ctaButton?.url} text={home.ctaButton?.text} />
        </div>
      </div>
    </section>
  )
}