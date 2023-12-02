import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { community_partners } from "@/Data/communityData";
import { StaticImageData } from "next/image";
import dummy_img from '../assets/bg/bg_image.png'

// const halfwayThrough = Math.ceil(community_partners.length / 2);

const firstHalf = community_partners.slice(0, community_partners.length);
// const secondHalf = community_partners.slice(halfwayThrough);

const SponsorCarousel = () => {
  return (
    <div className=" text-white py-10">
      <div className="text-3xl lg:text-4xl py-10 text-center font-bold">
        Community Partners
      </div>
      {/* <div className="heading ">
        <span className="pseudo"> </span>
        <h1 className="text-3xl font-bold text-white border-stroke">Community Partners</h1>
        <span className="divider_1"></span>
        <span className="divider_2"></span>
      </div> */}
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
        {/* <Marquee direction="right">
          <div className="flex gap-x-5">
            {secondHalf.map((partner, idx) => (
              <SponsorCard
                key={idx}
                link={partner.link}
                name={partner.name}
                imgLink="https://avatars.githubusercontent.com/u/95464181?s=280&v=4"
              />
            ))}
          </div>
        </Marquee> */}
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
    className="flex w-64 p-5 flex-col rounded-xl items-center justify-center"
  >
    <div className="h-44 w-44 mx-5 rounded-lg  flex flex-col items-center justify-center">
      <Image
        height={300}
        width={300}
        alt=""
        className="rounded-xl object-cover"
        src={imgLink}
      />
    </div>
  </Link>
  );
}

export default SponsorCarousel;


