import { getHeader } from "@/sanity/sanity-utils";

import CustomIconRender from "./CustomIconRender";
import Link from "next/link";
import BurgerButton from "./BurgerButton";

export default async function HeaderNavbar() {
  const { navbars } = await getHeader();

  return (
    <nav className="max-w-3xl lg:max-w-4xl mx-10 md:mx-auto py-8 relative z-20">
      <div className="hidden sm:flex flex-row gap-4 justify-between">
        <ul className="flex flex-row gap-6">
          {navbars.map(
            (navbar, index) =>
              navbar.type === "nav" && (
                <li key={index} className="hover:scale-110">
                  <Link
                    href={navbar.url}
                    title={navbar.text}
                    className="text-gradient-primary text-lg font-bold"
                  >
                    {navbar.text}
                  </Link>
                </li>
              )
          )}
        </ul>

        <ul className="flex flex-row gap-4">
          {navbars.map(
            (navbar, index) =>
              navbar.type === "sns" && (
                <li key={index} className="hover:scale-110">
                  <Link
                    href={navbar.url}
                    title={navbar.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gradient-primary text-lg font-bold"
                  >
                    <CustomIconRender type={navbar.snsType} />
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>

      <BurgerButton navbars={navbars} />
    </nav>
  );
}
