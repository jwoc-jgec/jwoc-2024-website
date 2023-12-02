import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import sticker from '../assets/jwoc_logos/jwoc_sticker.svg';
import '../css/stats.css'
import { Inter } from "next/font/google";
import {Lightbulb,Building2,GraduationCap,UserSquare,CircleDollarSign} from 'lucide-react';
// const jetbrains = Inter({subsets:["latin"]})
const inter = Inter({ subsets: ['latin'] })


const Stats = () => {
  return (
    <>
<section id="stats">
<div className="heading ">
        <span className="pseudo"> </span>
        <h1 className="font-bold text-white border-stroke">JWoC 2k23 Stats</h1>
        <span className="divider_1"></span>
        <span className="divider_2"></span>
      </div>
<div className={`stats ${inter.className}`}>
  <div className="stats_card">
    <i className="bx bx-bulb"><Lightbulb/></i>
    <p>Projects</p>
    <h4>50+</h4>
    {/* <span>Breaking Barriers.</span> */}
  </div>

  <div className="stats_card">
    <i className="bx bx-buildings"><Building2/></i>
    <p>Colleges</p>
    <h4>300+</h4>
    {/* <span>10+ International Colleges.</span> */}
  </div>

  <div className="stats_card">
    <i className="bx bxs-graduation"><GraduationCap/></i>
    <p>Participants</p>
    <h4>1700+</h4>
    {/* <span>Across the Globe.</span> */}
  </div>

  <div className="stats_card">
    <i className="bx bxs-user-pin"><UserSquare/></i>
    <p>Mentors</p>
    <h4>30+</h4>
    {/* <span>Connected All Together.</span> */}
  </div>
  <div className="stats_card">
    <i className="bx bxs-user-pin"><CircleDollarSign /></i>
    <p>Sponsor</p>
    <h4>10+</h4>
    {/* <span>Connected All Together.</span> */}
  </div>
</div>
</section>


    </>
  );
};

export default Stats;



