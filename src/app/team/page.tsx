import React from "react";
import "../../cssFiles/team.css";
import { team } from "@/Data/team"; 
import TeamCards from "../../Components/TeamCards";


function page() {
  return (
    <div className="main-team-container">
      <div className="content">
          {team.map((data, idx) => {
            return <TeamCards key={idx} teamData={data} />;
          })}
      </div>
    </div>
  );
}

export default page;
