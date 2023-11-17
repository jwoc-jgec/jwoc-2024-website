import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${orbitron.className}  flex min-h-screen flex-col items-center justify-between py-10 px-5 lg:px-0 md:flex-row md:gap-64`}
    >
      <div className="flex text-center md:text-start flex-col text-[#00FFFF]">
        <div className="pb-14">
          <p className="text-xl md:text-3xl font-semibold pb-1 drop-shadow-glow">
            Welcome to
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-glow">
            A MONTH OF
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-glow">
            Open Source
          </h2>
        </div>
        <p className="text-sm max-w-xl text-neutral-200 pb-10">
          Open Source contribution. By JGEC. For all. Plunge into Open Source
          contribution. By JGEC. For all.
        </p>
        <div className="flex flex-col">
          <Link
            href={""}
            className="relative flex items-center justify-center drop-shadow-glow py-3 px-10 md:py-5 md:px-20 bg-cyan-300 bg-opacity-10 font-bold text-lg md:text-2xl ring-2 ring-cyan-300"
          >
            Register as mentee{" "}
          </Link>
          <Link href={""} className="underline underline-offset-4 pt-5">
            I want to become a mentor
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center p-10">
        <div className="w-96 h-96 rounded-full bg-cyan-300 absolute z-0 blur-3xl opacity-30" />

        <div className="text-8xl  text-white absolute z-10">05</div>
      </div>
    </main>
  );
}
