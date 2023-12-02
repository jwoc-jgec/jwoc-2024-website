"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  const [state, setState] = React.useState(false);
  const { status } = useSession();

  const menus = [
    { title: "Home", path: "/" },
    { title: "Timeline", path: "/timeline" },
    { title: "Projects", path: "/project" },
    { title: "Sponsors", path: "/sponsors" },
    { title: "Team", path: "/team" },
  ];

  return (
    <nav className={`${inter.className} bg-gradient-to-b md:hidden text-white from-[#291352] to-[#190C32] top-0 sticky z-50 w-full`}>
      <div className="items-center px-4  max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href={`/`}>
            <Image
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.thehungryjpeg.com%2Fthumbs2%2Fori_3682048_w9eqsjmyqf1hj7ajbmk6wnco9pjgqdd35q1impxb_blue-phoenix-esport-mascot-logo-design.png&f=1&nofb=1&ipt=5a8928047b9bfd87c45e8a6b7684f67f810019a193f47351f7205a435028f11f&ipo=images`}
              alt={`JWOC Logo`}
              height={50}
              width={50}
              className="drop-shadow-cyanGlow pl-3"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-white outline-none p-2 rounded-md"
              onClick={() => setState(!state)}
            >
              {state ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-7 transition-all bg-gradient-to-t pt-5 from-[#291352] to-[#190C32] w-full left-0  absolute mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "top-7" : "-top-[27rem]"
          }`}
        >
          <ul className="justify-center pb-5 pl-6 items-center space-y-8">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="text-white text-lg hover:text-indigo-600"
              >
                <Link
                  onClick={() => setState((prev) => !prev)}
                  href={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          {status === "unauthenticated" ? (
            <Link
              onClick={() => setState((prev) => !prev)}
              className="font-bold text-lg pl-6 pt-2 flex items-center"
              href="/api/auth/signin"
            >
              Login
              <ArrowRight className="ml-2" />
            </Link>
          ) : (
            <Link
              href="/profile"
              onClick={() => {
                setState((prev) => !prev);
              }}
              className="font-bold text-lg pl-6 pt-2 flex items-center"
              // href="/api/auth/signout"
            >
              Profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
