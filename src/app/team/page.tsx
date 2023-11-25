import React from "react";
import "../../css/team.css";
import { team } from "@/Data/team";
import TeamCards from "../../components/TeamCards";

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
