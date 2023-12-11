"use client";
import { Award, Trophy } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { sponsorsData } from "@/Data/sponsorData";
import { motion } from 'framer-motion';

function SponsorCard({
  key,
  imgLink,
  category,
  link,
}: {
  key: number;
  imgLink: StaticImageData;
  category: string;
  link: string;
}) {
  return (
    // <div className="h-64 w-64 md:h-96 md:w-96 bg-violet-950 rounded-xl flex items-center justify-center ring-1 ring-yellow-400">
    //   <Image
    //     height={300}
    //     width={300}
    //     alt=""
    //     className="rounded-xl  h-52 w-52 md:h-80 md:w-80 object-cover"
    //     src={imgLink}
    //   />
    // </div>
    <Link
      target="_blank"
      href={link}
      className="flex w-64 p-3 flex-col rounded-xl items-center justify-center"
    >
      <div className="h-44 w-44 mx-5 rounded-lg flex flex-col items-center justify-center ">
        <Image
          height={200}
          width={200}
          alt=""
          className={`rounded-xl object-cover p-4 ${
            category != "Community Partner"
              ? "bg-[#afadad1c] backdrop-blur"
              : "rounded-3xl"
          }`}
          src={imgLink}
        />
      </div>
    </Link>
  );
}

function SponsorSection({
  key,
  sponsorCategory,
  sponsorCategoryImg,
  sponsors,
}: {
  key: number;
  sponsorCategory: string;
  sponsorCategoryImg: StaticImageData;
  sponsors: Array<{
    name: string;
    link: string;
    imagefilename: StaticImageData;
  }>;
}) {
  return (
    <div className="flex flex-col items-start w-full max-w-7xl mx-auto p-5">
      <h2 className="text-xl mr-4 md:text-2xl font-bold flex gap-4 p-5 items-center justify-center">
        {/* <> */}
        <Image
          height={100}
          width={100}
          alt={sponsorCategory}
          src={sponsorCategoryImg}
        />
        {sponsorCategory}
      </h2>
      <div className="flex items-center justify-center gap-8 flex-wrap py-5">
        {sponsors.map((data, idx) => {
          return (
            <SponsorCard
              imgLink={data.imagefilename}
              category={sponsorCategory}
              link={data.link}
              key={idx}
            />
          );
          // <Image height={200} width={200} className="rounded-xl" alt={data['name']} src={data.imagefilename}/>
        })}
      </div>
    </div>
  );
}
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


function page() {
  return (
     <motion.div
    initial="initial"
    animate="animate"
    variants={animationVariants}
    transition={{ duration: 1 }} className="  min-h-screen flex flex-col items-center text-white p-5">
      <div className="text-white text-center ">
        <p className="text-[1.35rem] text-[#5a5a5a]">MEET OUR MARVELOUS</p>
        <h1 className="text-[2.8rem] font-extrabold" 
        style={{
        backgroundImage:"linear-gradient(0deg, rgb(34 0 103), rgb(159 0 72))",
        WebkitBackgroundClip:"text",
        backgroundClip:"text",
        WebkitTextFillColor:"transparent",
        }}>SPONSORS</h1>
      </div>
      <div className="flex flex-col items-start w-full">
        {sponsorsData.map((data, idx) => {
          return (
            <SponsorSection
              key={idx}
              sponsorCategory={data["tier"]}
              sponsorCategoryImg={data["tierimg"]}
              sponsors={data["data"]}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default page;
