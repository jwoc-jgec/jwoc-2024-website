"use client";

import * as React from "react";
import "../css/font.css";

import Link from "next/link";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import logo from "../assets/jwoc_logos/jwoc-2024.svg";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const [state, setState] = React.useState(false);
  const { status } = useSession();
  const path = usePathname();

  const menus = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Timeline", path: "/timeline" },
    { title: "Sponsors", path: "/sponsors" },
    { title: "Team", path: "/team" },
  ];

  return (
    <nav
      className={` backdrop-blur-2xl sticky md:hidden text-white top-0 z-[5011] w-full`}
    >
      <div className="items-center px-4  max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href={`https://jwoc.tech/`}>
            <Image
              src={logo}
              alt={`JWoC Logo`}
              height={50}
              width={50}
              className="drop-shadow-cyanGlow pl-3"
            />
          </a>
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
          className={`flex-1 justify-self-center pb-7 transition-all bg-slate-900 pt-5 w-full left-0 z-50  absolute mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "top-7" : "-top-[27rem]"
          }`}
        >
          <ul className="justify-center pb-5 pl-6 items-center space-y-8">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className={`${
                  path == item.path && "text-blue-500 font-bold"
                } text-xl`}
              >
                <a
                  onClick={() => setState((prev) => !prev)}
                  href={`${item.path}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {status === "unauthenticated" ? (
            <Link
              onClick={() => setState((prev) => !prev)}
              className="font-bold text-lg pl-6 pt-2 flex items-center"
              href="/api/auth/signin"
            >
              MentorLocker
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
