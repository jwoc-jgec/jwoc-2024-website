"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/jwoc_logos/jwoc_sticker.svg";
import { LogIn } from "lucide-react";

import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

function Navbar() {
  const { status } = useSession();
  const path = usePathname();
  return (
    <nav className={`top-0 bg-transparent ${inter.className}`}>
      <div className="hidden md:visible md:flex pt-7 max-w-7xl mx-auto items-center justify-between text-white px-2 ">
        <Link href={`/`}>
          <Image
            src={logo}
            alt={`JWoC Logo`}
            height={80}
            width={80}
            className=""
          />
        </Link>

        <div className="flex items-center gap-x-10 xl:gap-x-10 text-lg xl:text-xl ">
          <Link
            href={"/"}
            className={path == "/" ? "text-blue-600 font-bold" : ""}
          >
            Home
          </Link>
          {/* <Link href={"/leaderboard"} className={path ==  ?"text-blue-600 font-bold":""}>
            leaderboard
          </Link> */}

          <Link
            href={"/timeline"}
            className={path == "/timeline" ? "text-blue-600 font-bold" : ""}
          >
            Timeline
          </Link>
          {/* <Link href={"/project"} className={path ==  ?"text-blue-600 font-bold":""}>
            Projects
          </Link> */}
          <Link
            href={"/sponsors"}
            className={path == "/sponsors" ? "text-blue-600 font-bold" : ""}
          >
            Sponsors
          </Link>
          <Link
            href={`/team`}
            className={path == "/team" ? "text-blue-600 font-bold" : ""}
          >
            Team
          </Link>
          {status === "unauthenticated" ? (
            <div
              onClick={() => signIn()}
              className="bg-[#4d0eae] px-2 py-2 rounded-md flex items-center gap-1 cursor-pointer hover:bg-violet-950 transition-all duration-300"
            >
              <LogIn /> <span>MentorLocker</span>
            </div>
          ) : (
            <Link
              href={`/profile`}
              className="bg-violet-900 px-6 py-2 rounded-full hover:bg-violet-950 transition-all duration-300"
            >
              profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
