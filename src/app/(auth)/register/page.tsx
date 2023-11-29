// import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function RegistrationButton({ title, link }: { title: string; link: string }) {
  return (
    <Link
      href={`register/${link}`}
      className="relative w-72 md:w-[35rem] flex items-center justify-center drop-shadow-cyanGlow py-3 px-10 md:py-5 md:px-28 text-cyan-300 bg-cyan-300 bg-opacity-10 font-bold md:text-2xl ring-2 ring-cyan-300"
    >
      {/* <section className="absolute py-6 md:py-10 bg-cyan-300 bg-opacity-30  transition-all duration-500 hover  w-0 left-0 group-hover:left-0  group-hover:w-full" /> */}
      {title}
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        strokeLinecap="round"
        stroke-linejoin="round"
        className="lucide lucide-triangle-right absolute bottom-1 right-1 fill-cyan-300"
      >
        <path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" />
      </svg>
    </Link>
  );
}

function page() {
  return (
    <div className="flex justify-center items-center flex-col h-[90vh] gap-y-14 text-white">
      <h1 className="text-4xl md:text-5xl font-bold p-5 text-center">
        Registration for JWOC 2024
      </h1>
      <div className="flex justify-center items-center py-10 flex-col gap-y-5 p-6 rounded-lg bg-violet-950">
        <RegistrationButton title="Register as Mentor" link="mentor" />
        <RegistrationButton title="Register as Mentee" link="mentee" />
      </div>
    </div>
  );
}
export default page;
