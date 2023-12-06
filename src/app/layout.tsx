import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import SessionProvider from "./Provider";
import { getServerSession } from "next-auth";
import MobileNavbar from "@/components/MobileNavbar";
import { Toaster } from "@/components/ui/toaster";
import favimg from "../assets/jwoc_logos/favicon.png";
// import bg from '../assets/bg/bg.svg';
import Footer from "@/components/Footer";
import bg from "../assets/bg/13.png";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JWoC: JGEC Winter of Code",
  description: "Official Website of JWoC 2024",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <link rel="icon" href={favimg.src} />
      <SessionProvider session={session}>
        <body className={`${orbitron.className} h-auto bg-[#202020]`}>
          <MobileNavbar />
          <Navbar />
          {children}
          {/* <Footer/> */}
          <Toaster />
          <div
            className="bg-wrap"
            style={{
              position: "fixed",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              backgroundImage: `url(${bg.src})`,
              backgroundPosition: "50% 0",
              backgroundSize: "cover",
              zIndex: "-10900",
            }}
          ></div>
          <div className="flex flex-col items-center justify-center text-white mb-4">
            <img src={favimg.src} alt="JWoC logo" height={80} width={80} />
            <p>Copyright © JWOC 2024. All rights reserved.</p>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
