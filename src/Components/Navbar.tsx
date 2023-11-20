'use client'

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className=" bg-gray-700">
      <div className="hidden md:visible md:flex pt-5 pb-5 max-w-7xl mx-auto items-center justify-between text-white px-5 z-50 ">
        <Link href={`/`}>
          <Image
            src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.thehungryjpeg.com%2Fthumbs2%2Fori_3682048_w9eqsjmyqf1hj7ajbmk6wnco9pjgqdd35q1impxb_blue-phoenix-esport-mascot-logo-design.png&f=1&nofb=1&ipt=5a8928047b9bfd87c45e8a6b7684f67f810019a193f47351f7205a435028f11f&ipo=images`}
            alt={`JWOC Logo`}
            height={50}
            width={50}
            className="drop-shadow-cyanGlow"
          />
        </Link>

        <div className="flex gap-x-24 font-bold md:text-xl">
          <Link href={"/leaderboard"} className="hover:drop-shadow-cyanGlow">
            leaderboard
          </Link>
          <Link href={"/timeline"} className="hover:drop-shadow-cyanGlow">
            timeline
          </Link>
          <Link href={`/team`} className="hover:drop-shadow-cyanGlow">
            team
          </Link>
          <Link href={"/sponsors"} className="hover:drop-shadow-cyanGlow">
            sponsors
          </Link>
          <Link href={"/login"} className="hover:drop-shadow-cyanGlow">
            login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
