import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "restoview",
  description: "view restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={inter.className} lang="en">
      <body className="flex ml-[240px] flex-grow overflow-auto">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
