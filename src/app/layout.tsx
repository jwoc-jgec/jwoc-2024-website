import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JWOC 2k24",
  description: "Official Website for JWOC 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-[#190C32]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
