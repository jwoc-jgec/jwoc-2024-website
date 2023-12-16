import React from "react";
import sticker from "../assets/jwoc_logos/jwoc-2024.svg";
import "../css/about.css";
import "../css/font.css"

import localFont from "next/font/local";

const About = () => {
  return (
    <>
      <section id="about" className="max-w-[82rem]">
        <div className="heading">
          <span className="pseudo"> </span>
          <h1 className="font-bold text-white">About Us</h1>
          <span className="divider_1"></span>
        </div>

        <div className="about container font-[localfont]">
          <div className="fig">
            <img src={sticker.src} alt="Logo" />
          </div>
          <div className={`desc clip`}>
            <h2>
              JWoC: <span>How it Works?</span>
            </h2>
            <p>
              JWoC provides a fully immersive learning experience for students
              and first-time contributors by promoting the wonders of
              open-source software and crafting a community of new and
              experienced technical developers. The best projects are selected
              for this program. Students get acquainted with the projects from
              the mentors during the Community Bonding Period. Students work on
              these projects during the coding phase. At the end of the coding
              period, the winners of the programs are announced on the basis of
              their contribution in terms of quantity as well as quality.
            </p>
            {/* <a href="./docs/code-of-conduct" className="btn">Code of Conduct</a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
