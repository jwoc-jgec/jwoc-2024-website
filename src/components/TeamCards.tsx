import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import "../css/team.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface TeamCardsProps {
  key: number;
  teamData: {
    Timestamp: string;
    "Full Name": string;
    "Linkedin Url": string;
    "Github url": string;
    "Twitterr Url": string;
    "Your Image in 1:1": string;
    imagefilename: StaticImageData;
    "Untitled Question": string;
  };
}

const TeamCards = (data: TeamCardsProps) => {
  return (
    <>
      <li className="member tag">
        <div className="thumb">
          <Image
            src={data.teamData.imagefilename}
            width={50}
            height={50}
            alt="Team Member"
          />
        </div>
        <div className="description">
          <h4>{data.teamData["Full Name"]}</h4>
          <p>
            Chris is a front-end developer and designer. He writes a bunch of
            HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.
          </p>
          <div className="link">
            <a
              className="linkedin"
              href={data.teamData["Linkedin Url"]}
              target="_blank"
            >
              <FaLinkedin fontSize="2.2em" color="wheat" />
            </a>
            <a
              className="github"
              href={data.teamData["Github url"]}
              target="_blank"
            >
              <FaGithubSquare fontSize="2.2em" color="wheat" />
            </a>
            <a
              className="github"
              href={data.teamData["Twitterr Url"]}
              target="_blank"
            >
              <FaSquareXTwitter fontSize="2.2em" color="wheat" />
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default TeamCards;
