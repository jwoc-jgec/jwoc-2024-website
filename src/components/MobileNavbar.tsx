"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/home" },
    { title: "Timeline", path: "/timeline" },
    { title: "sponsors", path: "/sponsors" },
    { title: "Team", path: "/team" },
  ];

  return (
    <nav className="bg-gradient-to-b md:hidden text-white from-[#291352] to-[#190C32] absolute top-0 z-50 w-full">
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
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center pb-5 pl-3 items-center space-y-8">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="text-white text-lg font-bold hover:text-indigo-600"
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
        </div>
      </div>
    </nav>
  );
}
