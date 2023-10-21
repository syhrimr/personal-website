"use client";

import { useEffect } from "react";

export default function GoTopButton() {
  useEffect(() => {
    const goTopButton = document.getElementById(
      "go-top-button"
    ) as HTMLButtonElement;
    window.onscroll = function () {
      scrollFunction(goTopButton);
    };
  });

  function scrollFunction(button: HTMLButtonElement | null) {
    if (button === null) return;

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.classList.remove("hidden");
      button.classList.add("block");
    } else {
      button.classList.remove("block");
      button.classList.add("hidden");
    }
  }

  function goTopFunction() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <div
      id="go-top-button"
      className="hidden fixed bottom-8 right-8 bg-white h-12 w-12 rounded-full shadow-lg cursor-pointer z-0"
    >
      <button
        type="button"
        title="To top button"
        className="w-full h-full flex justify-center items-center"
        onClick={goTopFunction}
      >
        <svg
          width="36px"
          height="36px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15L10 9.84985C10.2563 9.57616 10.566 9.35814 10.9101 9.20898C11.2541 9.05983 11.625 8.98291 12 8.98291C12.375 8.98291 12.7459 9.05983 13.0899 9.20898C13.434 9.35814 13.7437 9.57616 14 9.84985L19 15"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
