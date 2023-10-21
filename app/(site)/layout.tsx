import "../globals.css";

import HeaderNavbar from "../_components/HeaderNavbar";

import type { Metadata } from "next";
import { Provider } from "react-wrap-balancer";

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
        <header className="shadow-md">
          <HeaderNavbar />
        </header>
        <main className="max-w-3xl lg:max-w-4xl mx-10 md:mx-auto py-20">
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
