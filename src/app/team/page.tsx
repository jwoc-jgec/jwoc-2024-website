"use client";
import React, { useEffect, useState } from "react";
import "../../css/team.css";
import { team } from "@/Data/team";
import TeamCards from "../../components/TeamCards";
import { Inter } from "next/font/google";
import "../globals.css";
import { motion } from "framer-motion";
// import "../css/team.css";
// import { BarLoader } from "react-spinners";
const inter = Inter({ subsets: ["latin"] });
function shuffle(array: Array<any>) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap elements at current and random positions
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function page() {
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

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulating data fetching
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const shuffledTeamData = shuffle([...team]);
  return (
    <>
      {/* {loading && (
        <div className="absolute top-0 w-screen  overflow-x-hidden z-[10000]">
          <BarLoader width={5000} height={4} color="#B4FF39" />
        </div>
      )} */}

      {/* //  ${loading ? `opacity-0` : `opacity-100` } */}
      <section
        className={`${inter.className} mt-5
      `}
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={animationVariants}
          transition={{ duration: 3 }}
          className="text-white text-center "
        >
          <p className="text-[1.5rem] text-[#5a5a5a]">MEET OUR AWESOME</p>
          <h1
            className="text-[2.5rem] font-extrabold"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgb(34 0 103), rgb(159 0 72))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ORGANIZERS
          </h1>
        </motion.div>
        <div className="main-team-container">
          <div className="content">
            {shuffledTeamData.map((data, idx) => {
              return (
                <>
                  <TeamCards key={idx} cardKey={idx} teamData={data} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
