import { Home } from "@/types/Schemas"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: Home
}

export default function HomeBanner({ params: home }: Props) {
  if (home.bannerType === "work") {
    return (
      <section>
        <div>Work</div>
      </section>
    )
  } else {
    return (
      <section className="flex flex-row items-center gap-5">
        <Image
          src={home.profilePicture}
          alt={home.title}
          width={240}
          height={240}
          className="object-cover rounded-full"
        />

        <div>
          <h1 className="text-7xl font-extrabold">
            Hello, I&apos;m{" "}
            <span className="text-gradient-primary">
              {home.title}
            </span>
            !
          </h1>
    
          <div className="mt-3 text-xl text-gray-500">
            <PortableText value={home.subtitle} />
          </div>
        </div>
      </section>
    )
  }
}