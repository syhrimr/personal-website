import { getBlogs, getHomes } from "@/sanity/sanity-utils";
import HomeBanner from "../_components/HomeBanner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Personal website for portfolio showcase",
  metadataBase: new URL("https://syhrimr.vercel.app"),
  openGraph: {
    title: "Syahri - Portfolio",
    description: "Personal website for portfolio showcase",
    url: "https://syhrimr.vercel.app",
    siteName: "Syahri - Portfolio",
    locale: "en_US",
    type: "website"
  }
};

export default async function Home() {
  const blogs = await getBlogs();
  const homes = await getHomes();

  return (
    <div>
      <div>
        {homes.map((home) => (
          <HomeBanner key={home._id} params={home} />
        ))}
      </div>
    </div>
  );
}
