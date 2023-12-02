import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import {Linkedin,Twitter,Mail} from 'lucide-react'
import Email from "next-auth/providers/email";
// const jetbrains = Inter({subsets:["latin"]})
const inter = Inter({ subsets: ['latin'] })


const Footer = () => {
  return (
    <>
    
    <header className="flex justify-between items-center py-4 px-6 bg-white md:mx-auto md:max-w-2xl">
  <div className="flex items-center">
  <div className={`flex justify-around items-center ${inter.className}`}>
  <div className="flex justify-center items-center">
    <i className="bx bx-bulb"><Linkedin/></i>
    <p className="font-bold">Linkedin</p>
    {/* <span>Breaking Barriers.</span> */}
  </div>

  <div className="flex justify-center items-center">
    <i className="bx bx-buildings"><Twitter/></i>
    <p className="font-bold">Twitter</p>
    {/* <span>10+ International Colleges.</span> */}
  </div>

 
  <div className="flex justify-center items-center">
    <i className="bx bxs-user-pin"><Mail/></i>
    <p className="font-bold">Email</p>
    
  </div>
</div>
  </div>

</header>

    </>
  );
};

export default Footer;
