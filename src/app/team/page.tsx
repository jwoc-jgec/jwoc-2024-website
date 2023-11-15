import React from "react";
import "../../cssFiles/team.css";
import { team } from "@/Data/team"; 
import TeamCards from "../../Components/TeamCards";


function page() {
  return (
    <div className="main-team-container">
      <div className="content">
        {/* <ul className="team"> */}
          {team.map((data, idx) => {
            return <TeamCards key={idx} teamData={data} />;
          })}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default page;
