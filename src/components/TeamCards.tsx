"use client"
import { StaticImageData } from "next/image";
import React, { useState } from 'react';
// import "../css/team1.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

interface TeamCardsProps {
  key: number;
  teamData: {
    Timestamp: string;
    "Full Name": string;
    "Linkedin Url": string;
    "Github url": string;
    "Twitter Url": string;
    "Your Image in 1:1": string;
    imagefilename: StaticImageData;
    "designation": string;
  };
}

const TeamCards = (data: TeamCardsProps) => {
  // return (
  //   <>
  //     <li className="member tag">
  //       <div className="thumb">
  //         <Image
  //           src={data.teamData.imagefilename}
  //           width={50}
  //           height={50}
  //           alt="Team Member"
  //         />
  //       </div>
  //       <div className="description">
  //         <h4>{data.teamData["Full Name"]}</h4>
  //         <p>
  //           Chris is a front-end developer and designer. He writes a bunch of
  //           HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.
  //         </p>
  //         <div className="link">
  //           <a
  //             className="linkedin"
  //             href={data.teamData["Linkedin Url"]}
  //             target="_blank"
  //           >
  //             <FaLinkedin fontSize="2.2em" color="wheat" />
  //           </a>
  //           <a
  //             className="github"
  //             href={data.teamData["Github url"]}
  //             target="_blank"
  //           >
  //             <FaGithubSquare fontSize="2.2em" color="wheat" />
  //           </a>
  //           <a
  //             className="github"
  //             href={data.teamData["Twitterr Url"]}
  //             target="_blank"
  //           >
  //             <FaSquareXTwitter fontSize="2.2em" color="wheat" />
  //           </a>
  //         </div>
  //       </div>
  //     </li>
  //   </>
  // );c
  const [isSocialVisible, setSocialVisible] = useState(false);

  const showSocial = () => {
    setSocialVisible((prev) => !prev);
  };

  return (
    // <div className="container">
      <div className="card">
        <div className="card__border ">
                   <img
                    className="card__img"
            src={data.teamData.imagefilename.src}
            width={300}
            height={300}
            alt={data.teamData.designation}
          />
        </div>

        <h3 className="card__name">{`[${data.teamData["Full Name"]}]`}</h3>
        <span className="card__profession">{data.teamData.designation.toUpperCase()}</span>

        <div className="card__social" id="card-social">
          <div className="card__social-control">
            <div className="card__social-toggle" onClick={showSocial}>
              {isSocialVisible?<IoIosAddCircle/>:<MdCancel/>}
            </div>

            {isSocialVisible ? <span className=" text-white font-bold text-lg card__social-text">Social Media</span>:
            <ul className="card__social-list">
              <a href={data.teamData['Github url']} target="_blank" className="card__social-link">
                <FaGithubSquare fontSize="1.3em" />
              </a>

              <a href={data.teamData["Linkedin Url"]} target="_blank" className="card__social-link">
                <FaLinkedin fontSize="1.3em" />
              </a>

              <a href={data.teamData["Twitter Url"]} target="_blank" className="card__social-link">
            
               <FaSquareXTwitter fontSize="1.3em" />

              </a>
            </ul>}
          </div>
        </div>
      </div>
    // </div>
  );

};

export default TeamCards;
