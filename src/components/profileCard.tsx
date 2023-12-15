"use client"
import React from "react";
import "../app/globals.css"; // Make sure to import your Tailwind CSS file
import "../css/profileCard.css";
import logo from '../assets/jwoc_logos/favicon.png'
import { signOut } from "next-auth/react";
import Image from "next/image";

interface UserData {
  name: string;
  email: string;
  phone: string;
  projectId: string;
  PRMerged: number;
}

interface ProfileCardProps {
    userData: UserData;
  }
  

const ProfileCard = (userData : ProfileCardProps) => {
  return (
    <section>
      <div className="container text-white">
        <div className="card front-face">
          <header>
            <span className="logo">
              <h5>JWOC Card</h5>
            </span>
              <Image src={logo} width={50} height={50} alt="jwoc-logo"></Image>
          </header>

          <div className="card-details">
            <div className="name-number">
              <h6>Mentor Id</h6>
              <h5 className="number">8050 2030 3020 5040</h5>
              <h5 className="name">{userData.userData.name}</h5>
            </div>

            <div className="valid-date">
              <h6>Valid Thru</h6>
              <h5>02/24</h5>
            </div>
          </div>
        </div>

        <div className="card back-face">
            
          <h6>
            For customer service call +97 89725 68869 or email at
         &nbsp;{userData.userData.email}
          </h6>
          <span className="magnetic-strip"></span>
          <div className="signature">
            <i>00{userData.userData.PRMerged}</i>
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
