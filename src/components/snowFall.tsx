"use client";
import React from "react";
import Snowfall from "react-snowfall";

const SnowFall = () => {
  return (
    <div className="first-line:w-screen h-screen bg-transparent relative ">
     {window.innerWidth <= 600 ? <Snowfall snowflakeCount={50} /> : <Snowfall snowflakeCount={300} />}
    </div>
  );
};

export default SnowFall;
