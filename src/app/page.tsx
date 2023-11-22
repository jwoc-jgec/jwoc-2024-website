import Link from "next/link";
import "./globals.css";
export default function Home() {
  return (
    <main
      className={` flex max-w-7xl mx-auto flex-col justify-between py-10 pt-16 px-5 md:flex-row`}
    >
      <div className="flex text-center md:text-start flex-col text-[#00FFFF]">
        <div className="pb-14">
          <p className="text-xl md:text-3xl font-semibold pb-1 drop-shadow-glow">
            Welcome to
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-glow border-stroke">
            A MONTH OF
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-cyanGlow">
            Open Source
          </h2>
        </div>
        <p className="text-sm max-w-xl text-neutral-200 pb-10">
          Open Source contribution. By JGEC. For all. Plunge into Open Source
          contribution. By JGEC. For all.
        </p>
        <div className="flex flex-col items-center md:items-start">
          <Link
            href={"/login"}
            className="relative flex items-center justify-center drop-shadow-cyanGlow py-3 px-10 md:py-5 md:px-28 bg-cyan-300 bg-opacity-10 font-bold text-lg md:text-2xl ring-2 ring-cyan-300"
          >
            Register as mentee{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide mt-1 ml-1 lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
          <Link
            href={""}
            className="underline flex items-end underline-offset-4 pt-5"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-up-right"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[30rem] h-[30rem] rounded-full bg-cyan-500 z-0 blur-3xl opacity-20" />

        <div className="text-8xl  text-white drop-shadow-glow absolute z-10">
          05
        </div>
      </div>
    </main>
  );
}
