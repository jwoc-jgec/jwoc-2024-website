import { Award, Trophy } from "lucide-react";
import Image from "next/image";
import React from "react";

function SponsorCard({ imgLink }: { imgLink: string }) {
  return (
    <div className="h-64 w-64 md:h-96 md:w-96 bg-violet-950 rounded-xl flex items-center justify-center ring-1 ring-yellow-400">
      <Image
        height={300}
        width={300}
        alt=""
        className="rounded-xl  h-52 w-52 md:h-80 md:w-80 object-cover"
        src={imgLink}
      />
    </div>
  );
}

function SponsorSection({ sponsorCategory }: { sponsorCategory: string }) {
  return (
    <div className="flex flex-col items-start w-full max-w-7xl mx-auto p-5">
      <h2 className="text-2xl md:text-4xl font-bold flex gap-4 py-5 items-center">
        <Award color="yellow" size={40} />
        {sponsorCategory}
      </h2>
      <div className="flex items-center justify-center gap-8 flex-wrap py-5">
        {[1, 1, 1, 1, 1].map((item, idx) => (
          <SponsorCard
            key={idx}
            imgLink={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.asus.com%2Fmedia%2FOdin%2FWebsites%2FUS%2FNews%2Fsjvqt8fhzfcjxkfg%2Ftuf_logo.png&f=1&nofb=1&ipt=9a5b33164e024e654bdfec14aea9d9c2760a5e2ab66e4ec3191a0bdd35ef8052&ipo=images`}
          />
        ))}
      </div>
    </div>
  );
}

function page() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white p-5">
      <h1 className="text-4xl md:text-5xl text-center font-black py-5">
        Our Sponsors
      </h1>
      <div className="flex flex-col items-start w-full">
        <SponsorSection sponsorCategory="Gold Sponsors" />
        <SponsorSection sponsorCategory="Silver Sponsors" />
        <SponsorSection sponsorCategory="Bronze Sponsors" />
      </div>
    </div>
  );
}

export default page;
