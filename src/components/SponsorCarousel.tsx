"use client"
import "../css/font.css"

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { community_partners } from "@/Data/communityData";
import { StaticImageData } from "next/image";
import dummy_img from '../assets/bg/bg_image.png'
const halfwayThrough = Math.ceil(community_partners.length / 2);

const firstHalf = community_partners.slice(0, halfwayThrough);
const secondHalf = community_partners.slice(halfwayThrough);
const SponsorCarousel = () => {
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
   <div className=" text-white py-10">
      <div className="text-3xl lg:text-4xl py-10 text-center font-bold">
        <p>Community Partners</p>
      </div>
      <div className="space-y-5">
        <Marquee>
          <div className="flex gap-x-5">
            {firstHalf.map((partner, idx) => (
              <SponsorCard
                key={idx}
                link={partner.link}
                imgLink={partner.imagefilename? partner.imagefilename : dummy_img}
              />
            ))}
          </div>
        </Marquee>
        <Marquee direction="right">
          <div className="flex gap-x-5">
            {secondHalf.map((partner, idx) => (
              <SponsorCard
                key={idx}
                link={partner.link}
                // name={partner.name}
                imgLink={partner.imagefilename? partner.imagefilename : dummy_img}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

function SponsorCard({
  imgLink,
  link,
}: {
  imgLink: StaticImageData;
  link: string;
}) {
  return (
    <Link
    target="_blank"
    href={link}
    className="flex w-64 p-3 flex-col rounded-xl items-center justify-center"
  >
    <div className="h-44 w-44 mx-5 rounded-lg flex flex-col items-center justify-center opacity-70">
      <Image
        height={200}
        width={200}
        alt=""
        className="rounded-xl object-cover"
        src={imgLink}
      />
    </div>
  </Link>
  );
}

export default SponsorCarousel;


