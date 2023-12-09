"use client"
import React from "react";
import "../css/profileCard.css";

const ProjectCardProf = () => {
  return (
    <section>
    <div className="container text-black">
      <div className="card front-face">
        <header>
          <span className="logo">
            <h5>project NAME</h5>
          </span>
        </header>
        <div className="card-details">
          DESCRIPTION
          </div>
          <div className="valid-date">
            <button>Project Link</button>
            <button>Youtube Link</button>
          </div>
        </div>
    </div>
  </section>
  );
};

export default ProjectCardProf;
