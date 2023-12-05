"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from '../assets/jwoc_logos/jwoc_sticker.svg';
import {LogIn} from 'lucide-react'

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

function Navbar() {
  const { status } = useSession();
  return (
    <nav className={`top-0 z-50 bg-transparent ${inter.className}`}>
      <div className="hidden md:visible md:flex pt-3 pb-3 max-w-7xl mx-auto items-center justify-between text-white px-2 ">
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
          <Link href={"/"} className="">
            Home
          </Link>
          {/* <Link href={"/leaderboard"} className="">
            leaderboard
          </Link> */}

          <Link href={"/timeline"} className="">
            Timeline
          </Link>
          {/* <Link href={"/project"} className="">
            Projects
          </Link> */}
          <Link href={"/sponsors"} className="">
            Sponsors
          </Link>
          <Link href={`/team`} className="">
            Team
          </Link>
          {status === "unauthenticated" ? (
            <div
              onClick={() => signIn()}
              className="bg-[#4d0eae] px-2 py-2 rounded-md flex items-center gap-1 cursor-pointer hover:bg-violet-950 transition-all duration-300"
              >
              <LogIn/> <span>Login</span>
            </div>
          ) : (
            <Link href={`/profile`} className="bg-violet-900 px-6 py-2 rounded-full hover:bg-violet-950 transition-all duration-300">
              profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
