import Link from "next/link";
import "./globals.css";
import SponsorCarousel from "@/components/SponsorCarousel";
import About from "@/components/About";
import Stats from "@/components/Stats";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main
        className={`flex max-w-7xl mx-auto flex-col justify-between items-center pt-28 px-5 md:flex-row`}
      >
        {/* <img src={bg.src} alt="img" className="h-screen w-screen z-20"/> */}
        <div className="flex font-black text-center md:text-start flex-col text-[#00FFFF]">
          <div className="pb-14">
            <p className="text-xl md:text-3xl font-medium pb-1 text-[#d846a5]">
              Welcome to
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white border-stroke">
              A MONTH OF
            </h1>
            {/* <h2 className="text-5xl md:text-7xl tracking-wide drop-shadow-cyanGlow"> */}
            <h2 className="text-5xl md:text-7xl tracking-wide" style={{backgroundImage:"linear-gradient(315deg,#4d0eae,#d846a5)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              Open Source
            </h2>
          </div>
          <p className={`text-sm max-w-xl font-light text-neutral-200 pb-10 ${inter.className}`}>
            {/* Open Source contribution. By JGEC. For all. Plunge into Open Source
            contribution. By JGEC. For all. */}
            JWoC (JGEC Winter of Code) is a coding event organised annually by JGEC which helps students to plunge into Open Source contribution and get the realm of Software Development.
          </p>
          <div className="group flex flex-col items-center md:items-start">
            <Link
              href={"/register"}
              className="relative rounded-md flex w-8/12 text-white items-center justify-center py-3 px-10 md:py-3 md:px-10 bg-cyan-300 bg-opacity-10 font-bold text-lg md:text-2xl ring-2 ring-[#d846a5]"
            >
              <section className="absolute py-3 md:py-10 transition-all duration-500 hover  w-0 left-0 group-hover:left-0  group-hover:w-full" />
              Register Now{" "}
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
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-96 h-96 md:w-80 md:h-80 xl:w-[30rem] xl:h-[30rem] rounded-full  z-0 blur-3xl opacity-20" />

          <div className="text-[8rem] text-white absolute z-10">
            05
          </div>
        </div>
      </main>
      <About/>
      <SponsorCarousel />
      <Stats/>
    </>
  );
}
