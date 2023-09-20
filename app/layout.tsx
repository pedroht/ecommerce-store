import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store description",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {modal}
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
