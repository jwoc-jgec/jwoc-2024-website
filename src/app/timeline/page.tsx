"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import timeline from "../../assets/img/timeline.svg";
import "../../css/timeline.css";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
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
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationVariants}
      transition={{ duration: 1 }}
    >
      <section
      >
        <div className=" text-white py-8">
          <div className="heading timeline">
            <span className="pseudo"> </span>
            <div className="text-white text-center ">
        <p className="text-[1.65rem] text-[#5a5a5a]">CHECKOUT THE</p>
        <p className="text-[2.65rem] font-extrabold" 
        style={{
        backgroundImage:"linear-gradient(0deg, rgb(34 0 103), rgb(159 0 72))",
        WebkitBackgroundClip:"text",
        backgroundClip:"text",
        WebkitTextFillColor:"transparent",
        }}>TIMELINE</p>
      </div>
            <span className="divider_1"></span>
          </div>
          <div
            className={`container mx-auto flex flex-col items-start md:flex-row my-6 ${inter.className}`}
          >
            <div className="flex flex-col w-full md:top-36 lg:w-1/3 mt-2 md:mt-12 px-0 sm:px-8">
              <p className="text-sm md:text-base text-white mb-4">
                <p className="font-extrabold text-[#168D8F]">
                  Have a look what we scheduled for you!
                </p>
                Lets start the Debugging, Decoding, Developing journey!
              </p>
              
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky" id="timeline">
              <div className=" mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden px-0 py-10 sm:p-10 h-full">
                  <div
                    className=" border-2-2 border-yellow-555 sm:right-[50%] absolute h-full border"
                    style={{
                      position: "absolute",
                      // right: "50%",
                      border: "2px solid #fff",
                      borderRadius: "5%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 sm:left-[50%] absolute h-full border"
                    style={{
                      position: "absolute",
                      // left: "50%",
                      border: "2px solid #fff",
                      borderRadius: "5%",
                    }}
                  ></div>

                  <div className="mb-8 flex justify-between flex-row ml-5 sm:flex-row-reverse items-center left-timeline">
                    <div className="order-2 sm:order-1 w-1/12 sm:w-5/12"></div>
                    <div className="timecards order-1 w-full sm:w-5/12 px-1 py-4 text-left sm:text-right backgroundCustom">
                      <p className="mb-3 text-base text-yellow-300">
                        20 Dec - 14 Jan
                      </p>
                      <div className="mb-3 font-bold text-xl md:text-xl">
                        Mentee Registration
                      </div>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Registration period for Mentees!
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse sm:flex-row ml-5 sm:ml-0 items-center w-full right-timeline">
                    <div className="order-1 w-1/12 sm:w-5/12"></div>
                    <div className="timecards order-1 w-full sm:w-5/12 px-1 py-4 text-left backgroundCustom">
                      <p className="mb-3 text-base text-yellow-300">
                        20 Dec - 7 Jan
                      </p>
                      <div className="mb-3 font-bold text-xl md:text-xl">
                        Mentor Registration
                      </div>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Registration period for Mentors!
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row sm:flex-row-reverse ml-5 sm:ml-0  items-center w-full left-timeline">
                    <div className="sm:order-1 order-2 w-1/12 sm:w-5/12"></div>
                    <div className="timecards order-1 w-full sm:w-5/12 px-1 py-4  text-left sm:text-right backgroundCustom">
                      <p className="mb-3 text-base text-yellow-300"> 10 Jan</p>
                      <div className="mb-3 font-bold text-xl md:text-xl">
                        Project Announced
                      </div>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The wait is over! We are going to reveal the selected
                        projects.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center flex-row-reverse sm:flex-row ml-5 sm:ml-0 w-full right-timeline">
                    <div className="order-1 w-1/12 sm:w-5/12"></div>
                    <div className="timecards order-1 w-full sm:w-5/12 px-1 py-4 backgroundCustom">
                      <p className="mb-3 text-base text-yellow-300">
                        10 Jan - 14 Jan
                      </p>
                      <div className="mb-3 font-bold  text-xl md:text-xl text-left">
                        Community Bonding
                      </div>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Interact with your mentors and get to know about the
                        projects
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row sm:flex-row-reverse ml-5 sm:ml-0  items-center w-full left-timeline">
                    <div className="sm:order-1 order-2 w-1/12 sm:w-5/12"></div>
                    <div className="timecards order-1 w-full sm:w-5/12 px-1 py-4  text-left sm:text-right backgroundCustom">
                      <p className="mb-3 text-base text-yellow-300">25 Jan</p>
                      <div className="mb-3 font-bold text-xl md:text-xl">
                        Coding for Phase 1 starts
                      </div>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Finally the moment is here, You can start working on
                        your desired projects. Code Hard!
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center flex-row-reverse sm:flex-row ml-5 sm:ml-0 w-full right-timeline">
                    <div className="order-1 w-1/12 sm:w-5/12"></div>
                    <div className="timecards order-1 w-full sm:w-5/12 px-1 py-4 backgroundCustom">
                      <p className="mb-3 text-base text-yellow-300">15 Feb</p>
                      <div className="mb-3 font-bold  text-xl md:text-xl text-left">
                        Phase II Begins, End of Phase I
                      </div>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The first phase of the event ends here & second phase
                        starts!
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row sm:flex-row-reverse ml-5 sm:ml-0  items-center w-full left-timeline">
                    <div className="sm:order-1 order-2 w-1/12 sm:w-5/12"></div>
                    <div className="timecards order-1 w-full sm:w-5/12 px-1 py-4  text-left sm:text-right backgroundCustom">
                      <p className="mb-3 text-base text-yellow-300">25 Feb</p>
                      <div className="mb-3 font-bold text-xl md:text-xl">
                        Phase II Ends - JWoC Ends
                      </div>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The final stage concludes here!
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center flex-row-reverse sm:flex-row ml-5 sm:ml-0 w-full right-timeline">
                    <div className="order-1 w-1/12 sm:w-5/12"></div>
                    <div className="timecards order-1 w-full sm:w-5/12 px-1 py-4 backgroundCustom">
                      <p className="mb-3 text-base text-yellow-300">28 Feb</p>
                      <div className="mb-3 font-bold  text-xl md:text-xl text-left">
                        Official Result Announcement
                      </div>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Standup for the Champions! Get Here!
                      </p>
                    </div>
                  </div>
                </div>

                <img
                  height={300}
                  width={300}
                  className="mx-auto -mt-36 md:-mt-36"
                  src={timeline.src}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default page;
