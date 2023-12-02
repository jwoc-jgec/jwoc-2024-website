import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Orbitron} from "next/font/google";
import "./globals.css";
import SessionProvider from "./Provider";
import { getServerSession } from "next-auth";
import MobileNavbar from "@/components/MobileNavbar";
import { Toaster } from "@/components/ui/toaster";
import bg from '../assets/bg/bg_image.png'
import Footer from "@/components/Footer";
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
        <body className={`${orbitron.className} bg-gradient-to-tr from-[#330f47] from-0% via-[#37172C] via-50% to-[#000] to-80%`}
            // style={{backgroundImage: `url(${bg.src})`,
            // width: '100%',
            // height: '100%',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}
            >
          <MobileNavbar />
          <Navbar />
          {children}
          <Footer/>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
