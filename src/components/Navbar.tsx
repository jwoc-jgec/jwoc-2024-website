"use client";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky backdrop-blur-xl top-0 z-50 bg-gradient-to-b from-[#291352] to-[#190C32]">
      <div className="hidden  md:visible md:flex pt-5 pb-5 max-w-7xl mx-auto items-center justify-between text-white px-5 ">
        <Link href={`/`}>
          <Image
            src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.thehungryjpeg.com%2Fthumbs2%2Fori_3682048_w9eqsjmyqf1hj7ajbmk6wnco9pjgqdd35q1impxb_blue-phoenix-esport-mascot-logo-design.png&f=1&nofb=1&ipt=5a8928047b9bfd87c45e8a6b7684f67f810019a193f47351f7205a435028f11f&ipo=images`}
            alt={`JWOC Logo`}
            height={50}
            width={50}
            className="drop-shadow-cyanGlow"
          />
        </Link>

        <div className="flex items-center gap-x-20 font-bold md:text-xl ">
          <Link href={"/"} className="hover:drop-shadow-cyanGlow">
            home
          </Link>
          {/* <Link href={"/leaderboard"} className="hover:drop-shadow-cyanGlow">
            leaderboard
          </Link> */}

          <Link href={"/timeline"} className="hover:drop-shadow-cyanGlow">
            timeline
          </Link>
          <Link href={"/project"} className="hover:drop-shadow-cyanGlow">
            projects
          </Link>
          <Link href={"/sponsors"} className="hover:drop-shadow-cyanGlow">
            sponsors
          </Link>
          <Link href={`/team`} className="hover:drop-shadow-cyanGlow">
            team
          </Link>
          <Link
            href={"/login"}
            className="hover:drop-shadow-cyanGlow bg-violet-900 px-6 py-2 rounded-full hover:bg-violet-950 transition-all duration-300"
          >
            login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
