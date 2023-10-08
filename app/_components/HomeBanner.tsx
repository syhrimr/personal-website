import { Home } from "@/types/Schemas"

import IntroBanner from "./banner/IntroBanner"
import WorkBanner from "./banner/WorkBanner"

type Props = {
  params: Home
}

export default async function HomeBanner({ params: home }: Props) {
  if (home.bannerType === "work") {
    return <WorkBanner params={home} />
  } else {
    return <IntroBanner params={home} />
  }
}