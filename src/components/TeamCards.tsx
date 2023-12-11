"use client";
import "./font.css"

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import "../css/team1.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
interface TeamCardsProps {
  key: number;
  teamData: {
    Timestamp: string;
    "Full Name": string;
    "Linkedin Url": string;
    "Github url": string;
    "Twitter Url": string;
    "Your Image in 1:1": string;
    imagefilename: StaticImageData;
    designation: string;
  };
}

const TeamCards = (data: TeamCardsProps) => {
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
      className="nft"
    >
      <div className="main-1">
        <img
          className="tokenImage"
          src={data.teamData.imagefilename.src}
          alt="Image"
        />
        <h2>{data.teamData["Full Name"]}</h2>
        <p className="description">Organiser</p>
        <div className="tokenInfo">
          <div className="duration">
            <Link href={data.teamData["Linkedin Url"]}>
              <FaLinkedin
                fontSize="2.5em"
                className="p-1 cursor-pointer hover:scale-[1.1]"
                color="wheat"
              />
            </Link>
            <Link href={data.teamData["Github url"]}>
              <FaGithubSquare
                fontSize="2.5em"
                className="p-1 cursor-pointer hover:scale-[1.1]"
                color="wheat"
              />
            </Link>
            <Link href={data.teamData["Twitter Url"]} target="_blank">
              <FaSquareXTwitter
                fontSize="2.5em"
                className="p-1 cursor-pointer hover:scale-[1.1]"
                color="wheat"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCards;
