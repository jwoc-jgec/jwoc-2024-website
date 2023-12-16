"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/jwoc_logos/jwoc-2024.svg";
import { LogIn } from "lucide-react";
import "../css/font.css";
import { Silkscreen } from "next/font/google";
import { usePathname } from "next/navigation";
const inter = Silkscreen({ weight: ["400", "700"], subsets: ["latin"] });
import { motion } from "framer-motion";
import TextReveal from "./Texteffect";
import { useEffect, useState } from "react";
function Navbar() {
  const { status } = useSession();
  const path = usePathname();
  const [hover, setHover] = useState(false);
  const animationVariants = {
    initial: {
      y: -100, // Start from the top (off-screen)
      opacity: 0, // Start with 0 opacity
    },
    animate: {
      y: 0, // Move to the original position
      opacity: 1, // Fade in
    },
  };
  const hoverHandletrue = (e: any) => {
    setHover(true);
  };
  const hoverHandlefalse = () => {
    setHover(false);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationVariants}
      transition={{ duration: 1 }}
    >
      <nav className={`top-0 bg-transparent `}>
        <div className="hidden md:visible md:flex pt-7 max-w-7xl mx-auto items-center justify-between text-white px-2 ">
          <a href={`https://jwoc.tech/`}>
            <Image
              src={logo}
              alt={`JWoC Logo`}
              height={80}
              width={80}
              className=""
            />
          </a>

          <div
            className={`flex items-center gap-x-10 xl:gap-x-10 text-lg xl:text-xl `}
          >
            <a
            //  href={`http://localhost:3000/`}
             href={`https://jwoc.tech/`}
              className={` relative after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:bg-gradient-to-r after:from-#655F67 after:to-#655F67 after:via-transparent after:to-transparent after:bg-size-[12px 2px] ${
                path == "/" ? "text-blue-600 font-bold" : ""
              }`}
              onMouseEnter={hoverHandletrue}
              onMouseLeave={hoverHandlefalse}
            >
              {/* {!hover ? ( */}
              <span>Home</span>
              {/* ) : (
                <TextReveal text="qweop098dfs721!@#$*()" dataValue="Home" />
              )} */}
            </a>

            {/* <Link href={"/leaderboard"} className={path ==  ?"text-blue-600 font-bold":""}>
            leaderboard
          </Link> */}

            <a
              // href={`http://localhost:3000/timeline`}
              href={`https://jwoc.tech/timeline`}
              className={path == "/timeline" ? "text-blue-600 font-bold" : ""}
            >
              Timeline
            </a>
            {/* <Link href={"/project"} className={path ==  ?"text-blue-600 font-bold":""}>
            Projects
          </Link> */}
            <a
              href={"https://jwoc.tech/sponsors"}
              className={path == "/sponsors" ? "text-blue-600 font-bold" : ""}
            >
              Sponsors
            </a>
              <a
              // href={`http://localhost:3000/timeline`}
              href={`https://jwoc.tech/team`}
              className={path == "/team" ? "text-blue-600 font-bold" : ""}
            >
              Team
            </a>
            {status === "unauthenticated" ? (
              <div
                onClick={() => signIn()}
                className="bg-[#033b74] px-2 py-2 rounded-md flex items-center gap-1 cursor-pointer hover:bg-[#1a3050] transition-all duration-300"
              >
                <LogIn /> <span>MentorLocker</span>
              </div>
            ) : (
              <Link
                href={`/profile`}
                className="bg-[#033b74] px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer hover:bg-[#1a3050] transition-all duration-300"
              >
                Profile
              </Link>
            )}
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
