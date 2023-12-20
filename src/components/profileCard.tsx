"use client";
import React from "react";
import "../app/globals.css"; // Make sure to import your Tailwind CSS file
import "../css/profileCard.css";
import logo from "../assets/jwoc_logos/jwoc-2024.png";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface AllData {
  id : string
  name: string;
  email: string;
  phone: string;
  PRMerged: number;
  registeredProjects: [
    {
      id: string;
      projectName: string;
      projectDescription: string;
      projectTags: string[];
      videoLink: string;
      projectTypes: string;
      projectLink: string;
    }
  ];
}

interface ProfileCardProps {
  allData: AllData;
}

const ProfileCard = (allData: ProfileCardProps) => {
  const id = allData.allData.id.slice(0,16)
  
  return (
    <section>
      <div className="container text-white">
        <div className="card  front-face">
          <header>
            <span className="logo">
              <h5>JWOC Card</h5>
            </span>
            <Image src={logo} width={50} height={50} alt="jwoc-logo"></Image>
          </header>

          <div className="card-details">
            <div className="name-number">
              <h6>Mentor Id</h6>
              <h5 className="number">{id.toUpperCase()}</h5>
              {/* <h5 className="name">name</h5> */}
              <h5 className="name">{allData.allData.name}</h5>
            </div>

            <div className="valid-date">
              <h6>Valid Thru</h6>
              <h5>02/24</h5>
            </div>
          </div>
        </div>

        <div className="card back-face">
          <h6>
            For customer service call +97 89725 68869 or email at &nbsp;
            email
            contact.jwoc@gmail.com
          </h6>
          <span className="magnetic-strip"></span>
          <div className="signature">
            <i>PRMerged</i>
            <i>00{allData.allData.PRMerged}</i>
          </div>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            maiores sed doloremque nesciunt neque beatae voluptatibus doloribus.
            Libero et quis magni magnam nihil temporibus? Facere consectetur
            dolore reiciendis et veniam.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
