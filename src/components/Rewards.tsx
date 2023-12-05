
import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import sticker from '../assets/jwoc_logos/jwoc_sticker.svg';
import '../css/rewards.css'
import { Inter } from "next/font/google";
import {Lightbulb,Building2,GraduationCap,UserSquare,CircleDollarSign} from 'lucide-react';
import perk1 from '../assets/rewards/perk-1.png';
import perk2 from '../assets/rewards/perk-2.png';
import perk3 from '../assets/rewards/perk-3.png';
import perk4 from '../assets/rewards/perk-4.png';
import perk5 from '../assets/rewards/perk-5.png';

// const jetbrains = Inter({subsets:["latin"]})
const inter = Inter({ subsets: ['latin'] })


const Stats = () => {
  return (
    <>
<section id="rewards" className=" text-white ">
  <div className="heading">
    <span className="pseudo"></span>
    <h1 className="font-bold border-stroke">Rewards</h1>
    <span className="divider_1"></span>
  </div>

  <div className={`sub_head ${inter.className}`}>
    <h2>Why you must register for <span className="bg-[#4d0eae] px-2 py-1 rounded ">JWoC 2K24</span>  ?</h2>
    <p>Because exciting rewards & prizes are waiting just for you.</p>
  </div>

  <div className={`${inter.className} content`}>
    <div className="reward_card">
      <div className="fig">
        <img src={perk1.src} alt="Paid Internship Opportunities" />
      </div>
      <h4>Paid Internship Opportunities</h4>
    </div>

    <div className="reward_card">
      <div className="fig">
        <img src={perk2.src} alt="Coupons & Free Domains" />
      </div>
      <h4>Coupons & Free Domains</h4>
    </div>

    <div className="reward_card">
      <div className="fig">
        <img src={perk3.src} alt="Goodies & Cool Stickers" />
      </div>
      <h4>Goodies & Cool Stickers</h4>
    </div>

    <div className="reward_card">
      <div className="fig">
        <img src={perk4.src} alt="Workshops & MasterclassNamees" />
      </div>
      <h4>Workshops & MasterclassNamees</h4>
    </div>

    <div className="reward_card">
      <div className="fig">
        <img src={perk5.src} alt="Verified Certificates" />
      </div>
      <h4>Verified Certificates</h4>
    </div>
  </div>
</section>

    </>
  );
};

export default Stats;



