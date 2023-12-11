"use client";
import React from "react";
import Snowfall from "react-snowfall";

const SnowFall = () => {
  return (
    <div className="first-line:w-screen h-screen bg-transparent relative ">
     <Snowfall snowflakeCount={150} />
    </div>
  );
};

export default SnowFall;
