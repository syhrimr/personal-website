import "../globals.css";

import HeaderNavbar from "../_components/HeaderNavbar";

import type { Metadata } from "next";
import { Provider } from "react-wrap-balancer";
import GoTopButton from "../_components/GoTopButton";

export const metadata: Metadata = {
  title: "Syahri - Portfolio",
  description: "Personal Website for Portfolio Showcase"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header-sticky bg-white shadow-md">
          <HeaderNavbar />
        </header>
        <main className="max-w-3xl lg:max-w-4xl mx-10 md:mx-auto py-20 pt-40">
          <Provider>{children}</Provider>
          <GoTopButton />
        </main>
      </body>
    </html>
  );
}
