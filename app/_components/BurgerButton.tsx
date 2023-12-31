"use client";

import { useState } from "react";

import CustomIconRender from "./CustomIconRender";
import Link from "next/link";

export default function BurgerButton({ navbars }: { navbars: any[] }) {
  const [isOpenMenu, setOpenMenu] = useState<Boolean>(true);

  function toggleMenu() {
    setOpenMenu(!isOpenMenu);

    const body = document.body;
    const menuContainer = document.getElementById("sm-menu-container");
    const goTopButton = document.getElementById("go-top-button");

    body.style.overflowY = isOpenMenu ? "hidden" : "scroll";

    if (goTopButton) {
      goTopButton?.classList.toggle("invisible");
    }

    if (isOpenMenu) {
      menuContainer?.classList.remove("hidden");
      menuContainer?.classList.add("flex");
    } else {
      menuContainer?.classList.remove("flex");
      menuContainer?.classList.add("hidden");
    }
  }

  return (
    <section>
      <div className="flex sm:hidden justify-end">
        <div
          className="p-2 border border-gray-300 rounded-lg"
          onClick={() => toggleMenu()}
        >
          <CustomIconRender type="burger" />
        </div>
      </div>

      <div
        id="sm-menu-container"
        className="hidden flex-col gap-16 py-4 bg-white relative w-[100svw] h-[100svh] top-24 z-20 left-[-2.5rem]"
      >
        <ul className="flex flex-col gap-4">
          {navbars.map(
            (navbar, index) =>
              navbar.type === "nav" && (
                <li key={index} className="px-8">
                  <Link
                    href={navbar.url}
                    title={navbar.text}
                    className="block mb-4"
                    onClick={() => toggleMenu()}
                  >
                    <span className="text-gradient-primary text-lg font-bold">
                      {navbar.text}
                    </span>
                  </Link>
                  <hr className="h-px mb-4 bg-gray-200 border-0"></hr>
                </li>
              )
          )}
        </ul>

        <ul className="flex flex-row gap-8 md:gap-4 justify-center">
          {navbars.map(
            (navbar, index) =>
              navbar.type === "sns" && (
                <li
                  key={index}
                  className="scale-150 scale- md:scale-100 hover:scale-110"
                >
                  <Link
                    href={navbar.url}
                    title={navbar.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gradient-primary text-lg font-bold scale-110 md:scale-100"
                  >
                    <CustomIconRender type={navbar.snsType} />
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </section>
  );
}
