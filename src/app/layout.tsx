import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import SessionProvider from "./Provider";
import { getServerSession } from "next-auth";
import MobileNavbar from "@/components/MobileNavbar";
import { Toaster } from "@/components/ui/toaster";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JWOC 2k24",
  description: "Official Website for JWOC 2024",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${orbitron.className} bg-[#190C32]`}>
          <MobileNavbar />
          <Navbar />
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
