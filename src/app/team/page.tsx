import React from "react";
import "../../css/team.css";
import { team } from "@/Data/team";
import TeamCards from "../../components/TeamCards";
import { Inter } from "next/font/google";
const inter = Inter({subsets:['latin']})

function page() {
  return (
    <section className={`${inter.className} mt-5` }>
      <div className="text-white text-center ">
        <p className="text-xl text-[#5a5a5a]">MEET OUR AWESOME TEAM</p>
        <h1 className="text-4xl font-extrabold" style={{backgroundImage:"linear-gradient(315deg,#4d0eae,#d846a5)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"}}>ORGANIZERS</h1>
      </div>
    <div className="main-team-container">
      <div className="content">
        {team.map((data, idx) => {
          return <TeamCards key={idx} teamData={data} />;
        })}
      </div>
    </div>
    </section>
  );
}

export default page;
