// import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import '../../../css/register.css'
import mentee_reg from '../../../assets/img/mentee_reg.png'
import mentor_reg from '../../../assets/img/mentor_reg.png'


function RegistrationButton({ title, link }: { title: string; link: string }) {
  return (
    <>
    <section id="register">
      
    <h1 className="text-3xl md:text-3xl text-white font-bold p-5 pt-0 text-center">
        Registration for JWoC 2024
      </h1>
          <div className="sub_head">
        <h2>What you want to be?</h2>
      </div>

      <div className="details">
        <div className="register_card">
          <img src={mentee_reg.src} alt="Mentee Fig" />
          <h4>Become a Mentee</h4>
          <p>
            If you are new to open source world or have some experience in open source and want to
            contribute in some amazing open source projects register as a mentee.
          </p>
          {/* <a href="./auth/student-register" className="btn">Mentee's Registration</a> */}
          <Link
      href={`register/mentee`}
      // className="relative w-72 md:w-[35rem] flex items-center justify-center drop-shadow-cyanGlow py-3 px-10 md:py-5 md:px-28 text-cyan-300 bg-cyan-300 bg-opacity-10 font-bold md:text-2xl ring-2 ring-cyan-300"
      className="btn"
    >
      {/* <section className="absolute py-6 md:py-10 bg-cyan-300 bg-opacity-30  transition-all duration-500 hover  w-0 left-0 group-hover:left-0  group-hover:w-full" /> */}
      Register as Mentee
      
    </Link>
        </div>

        {/* <img src="./assets/img/register.svg" alt="Reg Img" className="reg_img" /> */}

        <div className="register_card">
          <img src={mentor_reg.src} alt="Mentor Fig" />
          <h4>Become a Mentor</h4>
          <p>
            If you have some unique projects which you are willing to add some features or complete
            it by open sourcing them, we encourage you to apply for mentorship in our program.
          </p>
          {/* <a href="./auth/mentor-register" className="btn">Mentor's Registration</a> */}
          <Link
      href={`register/mentor`}
      // className="relative w-72 md:w-[35rem] flex items-center justify-center drop-shadow-cyanGlow py-3 px-10 md:py-5 md:px-28 text-cyan-300 bg-cyan-300 bg-opacity-10 font-bold md:text-2xl ring-2 ring-cyan-300"
      className="btn"
    >
      {/* <section className="absolute py-6 md:py-10 bg-cyan-300 bg-opacity-30  transition-all duration-500 hover  w-0 left-0 group-hover:left-0  group-hover:w-full" /> */}
      Register as Mentor
      
    </Link>
        </div>
      </div>

    </section>
    </>

  );
}

async function page() {
  const session = await getServerSession();
  if (session) redirect("/profile");
  return (
    <div>
      <div>
        {/* <RegistrationButton title="Register as Mentor" link="mentor" /> */}
        <RegistrationButton title="Register as Mentee" link="mentee" />
      </div>
    </div>
  );
}
export default page;
