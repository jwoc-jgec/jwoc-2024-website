"use client";
import "../css/font.css";
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
// import { BarLoader } from "react-spinners";
import { useEffect, useState } from "react";
import image from "../assets/jwoc_logos/jwoc-home.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [loading, setLoading] = useState(true);
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
  // useEffect(() => {
  //   // Simulating data fetching
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  // const targetDate = new Date('2023-12-20T00:00:00').getTime();
  return (
    <>
      {/* {loading && (
        <div className="absolute top-0 w-screen  overflow-x-hidden z-[10000]">
          <BarLoader width={5000} height={4} color="#B4FF39" />
        </div>
      )} */}
      {/* {!loading && ( */}
        <div className="absolute w-full overflow-x-hidden">
          <SnowFall />
        </div>
      {/* )} */}
      {/* {!loading && ( */}
        <main
          className={`flex max-w-7xl mx-auto flex-col justify-between items-center pt-[80px] px-5 md:flex-row`}
        >
          {/* <img src={bg.src} alt="img" className="h-screen w-screen z-20"/> */}
          <div className="flex font-black text-center md:text-start flex-col text-[#00FFFF]">
            <div className="pb-6">
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                }}
                className="text-4xl silk md:text-4xl font-bold pb-2 text-[#ffffff]"
              >
                WELCOME TO
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                }}
                className="text-[6vh] silk md:text-7xl "
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241)); ",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                A MONTH OF
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                }}
                className="text-[6vh] silk md:text-7xl  tracking-tight font-[1000] btn-shine"
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
              className={`max-w-xl font-light text-[16px] text-neutral-200 pb-10 `}
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
                className="relative rounded-md flex w-8/12 text-white items-center justify-center py-2 px-10 md:py-3 md:px-10 bg-black bg-opacity-20 font-bold text-lg md:text-2xl ring-2 ring-[#168D8F] transition-all duration-500 hover:text-[#168D8F] hover:ring-white"
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
              className={`text-sm max-w-xl flex flex-col items-center md:items-start mt-6 text-neutral-200 pb-5  `}
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

            <div className="text-[8rem] text-white absolute z-10"><Image height={500}  src={image} alt='JWoC' className='pixel'></Image></div>
          </div>
        </main>
      {/* )} */}
      {/* {!loading && ( */}
        <>
          <About />
          <SponsorCarousel />
          {/* <Stats/> */}
          <Rewards />
          {/* <ContactUs /> */}
          <Footer />
        </>
      {/* )} */}
    </>
  );
}
