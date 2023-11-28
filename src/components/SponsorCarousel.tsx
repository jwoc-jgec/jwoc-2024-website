import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const community_partners = [
  {
    name: "GDSC SXCCAL (Xaviers)",
    link: "https://linktr.ee/gdscsxccal",
  },
  {
    name: "GDSC BBIT",
    link: "https://gdsc.community.dev/budge-budge-institute-of-technology-kolkata/",
  },
  {
    name: "GDSC CU",
    link: "https://gdsc.community.dev/university-of-calcutta-kolkata/",
  },
  {
    name: "GDSC RKMGEC",
    link: "", // Insert link for GDSC RKMGEC
  },
  {
    name: "IACS ACM Student Chapter",
    link: "", // Insert link for IACS ACM Student Chapter
  },
  {
    name: "Befikra Community",
    link: "https://www.befikracommunity.in/",
  },
  {
    name: "GDSC NITDGP",
    link: "https://gdsc.community.dev/national-institute-of-technology-nit-durgapur/",
  },
  {
    name: "GDSC CITK",
    link: "https://linktr.ee/gdsccitk",
  },
  {
    name: "Codess Cafe",
    link: "https://codess.cafe/",
  },
  {
    name: "GDSC GCETTB",
    link: "https://gdsc.community.dev/government-college-of-engineering-textile-technology/",
  },
  {
    name: "GDSC CGEC",
    link: "https://gdsc.community.dev/cooch-behar-government-engineering-college-cooch-behar/",
  },
  {
    name: "NoobCode",
    link: "https://noobcode-website.vercel.app/",
  },
  {
    name: "GDSC MAKAUT",
    link: "https://linktr.ee/gdscmakaut",
  },
  {
    name: "GDSC IITK",
    link: "https://gdsc.community.dev/indian-institute-of-technology-iit-kanpur/",
  },
  {
    name: "GDSC LPU",
    link: "https://gdsc.community.dev/lovely-professional-university-jalandhar/",
  },
  {
    name: "TFUG",
    link: "https://tfugjalandhar.dev/",
  },
  {
    name: "CNCG Jalandhar",
    link: "https://community.cncf.io/cloud-native-jalandhar/",
  },
  {
    name: "The GNU/Linux Users' Group, NIT Durgapur",
    link: "", // Insert link for The GNU/Linux Users' Group, NIT Durgapur
  },
  {
    name: "GDSC IIEST",
    link: "", // Insert link for GDSC IIEST
  },
  {
    name: "GDSC IEM",
    link: "https://gdsc.community.dev/institute-of-engineering-management-kolkata/",
  },
];

const halfwayThrough = Math.ceil(community_partners.length / 2);

const firstHalf = community_partners.slice(0, halfwayThrough);
const secondHalf = community_partners.slice(halfwayThrough);

const SponsorCarousel = () => {
  return (
    <div className=" text-white py-10">
      <div className="text-3xl lg:text-4xl py-10 text-center font-bold">
        Community Partners
      </div>
      <div className="space-y-5">
        <Marquee>
          <div className="flex gap-x-5">
            {firstHalf.map((partner) => (
              <SponsorCard
                link={partner.link}
                name={partner.name}
                imgLink="https://avatars.githubusercontent.com/u/95464181?s=280&v=4"
              />
            ))}
          </div>
        </Marquee>
        <Marquee direction="right">
          <div className="flex gap-x-5">
            {secondHalf.map((partner) => (
              <SponsorCard
                link={partner.link}
                name={partner.name}
                imgLink="https://avatars.githubusercontent.com/u/95464181?s=280&v=4"
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
  name,
  link,
}: {
  imgLink: string;
  name: string;
  link: string;
}) {
  return (
    <Link
      target="_blank"
      href={link}
      className="flex w-64 p-5 flex-col rounded-xl items-center justify-center bg-violet-950/50"
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
      <p className=" text-xl font-bold pt-5">{name}</p>
    </Link>
  );
}

export default SponsorCarousel;
