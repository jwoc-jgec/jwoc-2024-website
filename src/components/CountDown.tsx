"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import "../css/font.css"

interface RemainingTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number; 
}

interface Props {
  targetDate: number;
  title:string
}

const CountDown: React.FC<Props> = ({ targetDate,title }) => {

  const [remaining, setRemaining] = useState<RemainingTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setRemaining({ days, hours, minutes, seconds });

      if (difference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center flex flex-col h-[100vh] justify-center items-center">
    <h1 className="text-4xl tracking-wider md:text-4xl text-white font-bold p-5 pt-0 text-center">
        {title} Registration is Down for maintenance & will begin in </h1>
        <div className='flex items-center gap-3 text-[#787a91]'>
      <span className="flex flex-col items-center justify-center bg-[#00000082] rounded-xl p-4">
        <span className="text-3xl font-bold">{remaining.days}</span> 
        <span className='text-sm'>days</span>
      </span>
      <span className='text-2xl font-extrabold'>:</span>

      <span className="flex flex-col items-center justify-center  bg-[#00000082] rounded-xl p-4">
        <span className="text-3xl font-bold">{remaining.hours}</span> 
        <span className='text-sm'>hours</span>
      </span>
      <span className='text-2xl font-extrabold'>:</span>

      <span className="flex flex-col items-center justify-center  bg-[#00000082] rounded-xl p-4">  
        <span className="text-3xl font-bold">{remaining.minutes}</span> 
        <span className='text-sm'>minutes</span>

      </span>
      <span className='text-2xl font-extrabold'>:</span>


      <span className="flex flex-col items-center justify-center  bg-[#00000082] rounded-xl p-4">
        <span className="text-3xl font-bold">{remaining.seconds}</span>
                <span className='text-sm'>seconds</span>

      </span></div>
    </div>
  );
};

export default CountDown;

