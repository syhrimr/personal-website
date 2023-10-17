import { Home } from "@/types/Schemas"

import { PortableText } from "@portabletext/react"
import Balancer from "react-wrap-balancer"
import Image from "next/image"
import CustomCTAButton from "../CustomCTAButton"
import CustomRenderBlock from "../CustomRenderBlock"

type Props = {
  params: Home
}

export default function IntroBanner({ params: home }: Props) {
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
          <Balancer>
            Hi, I&apos;m{" "}
            <span className="text-gradient-primary">
              {home.title}
            </span>
            !
          </Balancer>
        </h1>
  
        <div className="text-xl text-gray-500 mb-8">
          <CustomRenderBlock params={home.subtitle} />
        </div>

        <div className="md:w-1/3">
          <CustomCTAButton url={home.ctaButton?.url} text={home.ctaButton?.text} />
        </div>
      </div>
    </section>
  )
}