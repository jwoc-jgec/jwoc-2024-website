"use client";
import "../components/font.css"
import Link from "next/link";
import "./globals.css";
import SponsorCarousel from "@/components/SponsorCarousel";
import About from "@/components/About";
import Rewards from "@/components/Rewards";
import { Inter } from "next/font/google";
import jgec from "../assets/img/jgec logo.png";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import SnowFall from "@/components/SnowFall";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const targetDate = new Date('2023-12-20T00:00:00').getTime();
  return (
    <>
      <div className="absolute w-full overflow-x-hidden">
        <SnowFall />
      </div>
      <main
        className={`flex max-w-7xl mx-auto flex-col justify-between items-center pt-24 px-5 md:flex-row`}
      >
        {/* <img src={bg.src} alt="img" className="h-screen w-screen z-20"/> */}
        <div className="flex font-black text-center md:text-start flex-col text-[#00FFFF]">
          <div className="pb-8">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
              }}
              className="text-xl md:text-4xl font-bold pb-3 text-[#ffffff]"
            >
              YOU'VE BEEN ABDUCTED INTO
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
              }}
              className="text-6xl md:text-8xl py-3 btn-shine"
              // style={{
              //   backgroundImage:
              //     "linear-gradient(90deg, #f887ff 2%, rgba(134,0,41,1) 48%, rgba(134,0,41,1) 54%, rgba(45,19,60,1) 87%, rgba(50,20,80,1) 136%); ",
              //   WebkitBackgroundClip: "text",
              //   backgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              // }}
            >
              A MONTH OF
            </motion.h1>
             <motion.h2
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-7xl md:text-7xl pt-3 tracking-tight font-[1000] session"
            >
              OPEN SOURCE
            </motion.h2>
           </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={`max-w-xl font-light text-[16px] text-neutral-200 pb-8 ${inter.className}`}
          >
            JWoC (JGEC Winter of Code) is a coding event organised annually by
            JGEC which helps students to plunge into Open Source contribution
            and get the realm of Software Development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
            }}
            // whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="group flex flex-col items-center md:items-start"
          >
            <Link
              href={"/register"}
              className="relative rounded-md flex w-8/12 text-white items-center justify-center py-3 px-10 md:py-3 md:px-10 bg-black bg-opacity-20 font-bold text-lg md:text-2xl ring-2 ring-[#168D8F] transition-all duration-500 hover:text-[#168D8F] hover:ring-white"
            >
              {/* <section className="absolute py-3 md:py-10 transition-all duration-500 hover  w-0 left-0 group-hover:left-0  group-hover:w-full" /> */}
              Register Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                stroke-linejoin="round"
                className="lucide mt-1 ml-1 lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                strokeLinecap="round"
                stroke-linejoin="round"
                className="lucide lucide-triangle-right absolute bottom-1 right-1 fill-cyan-300"
              >
                <path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" />
              </svg> */}
            </Link>
            {/* <Link
            href={"/register"}
            className="underline font-light flex items-end underline-offset-4 pt-5"
          >
            I want to become a mentor
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-up-right"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link> */}
          </motion.div>
          <p
            className={`text-sm max-w-xl flex flex-col items-center md:items-start mt-6 text-neutral-200 pb-10 ${inter.className} `}
          >
            <span className="font-light">IN ASSOCIATION WITH</span>
            <Link href="https://jgec.ac.in" target="_blank">
              <Image
                src={jgec.src}
                alt="JGEC"
                height={140}
                width={140}
                className="rounded-md mt-6"
              />
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-96 h-96 md:w-80 md:h-80 xl:w-[30rem] xl:h-[30rem] rounded-full  z-0 blur-3xl opacity-20" />

          <div className="text-[8rem] text-white absolute z-10">05</div>
        </div>
      </main>
      <About />
      <SponsorCarousel />
      {/* <Stats/> */}
      <Rewards />
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}
