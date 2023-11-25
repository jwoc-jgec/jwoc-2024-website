"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import "../../css/UserCard.css";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

interface UserData {
  name: string;
  email: string;
  phone: string;
  projectId: string;
  PRMerged: number;
}
export default function ProfilePage() {
  const router = useRouter();
  const [uData, setData] = useState<any>({
    email: "",
  });
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    projectId: "",
    PRMerged: 0,
  });

  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.replace("/login");
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    if (session) {
      console.log("data  - prof", session.user?.email);
      console.log("session - prof", sessionStatus);
      // let cred = session.user?.email
      setData(session);
    } else {
      console.log("data  - prof - den");
    }
  }, [session, router]);

  useEffect(() => {
    if (sessionStatus === "authenticated") getUesrData();
  }, [session, sessionStatus, router]);

  async function getUesrData() {
    // if (uData && uData.email) {
    console.log("uData.email", uData.user.email);
    console.log("uData", uData);
    const email = uData.user.email;
    const type = "Mentor"
    try {
      console.log("entered");

      const resUserExists = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, email}),
      });
      const { user } = await resUserExists.json();
      console.log("user --- ", user);
      setUserData(user);
      console.log("userData", userData);
    } catch (error) {
      toast.error("Failed to retrieve User Data");
      console.log("Failed to retrieve User Data");
      console.log("error", error);
    }
    // }
  }

  // console.log("userData", userData.name);

  return (
    <div className="parofile-parent">
      <div className="userCard">
        <div className="top-banner">
          <FaUserCircle size={40} />
          <button
            onClick={() => signOut({ callbackUrl: process.env.BASE_URL })}
          >
            <TbLogout size={40} />
          </button>
        </div>
        <p className="selectionStatus"> Stauts : Decision Pending</p>
        {userData && userData.name && (
          <p className="userInfo">Name : {userData.name}</p>
        )}
        {userData && userData.email && (
          <p className="userInfo">Email: {userData.email}</p>
        )}
        {userData && userData.phone && (
          <p className="userInfo">Phone: {userData.phone}</p>
        )}
        {userData && userData.PRMerged && (
          <p className="userInfo">Merged PR: {userData.PRMerged}</p>
        )}
        {/* Upload project Logics we can show the list of project and there status of sellesction in table format  */}
        <div className="projectCard">
          <h3>projectName</h3>
          <p>description</p>
          <p className="techStack">Tech Stack: techStack</p>
          <a href="githubLink" target="_blank" rel="noopener noreferrer">
            GitHub Link
          </a>
        </div>
      </div>
    </div>
  );
}
