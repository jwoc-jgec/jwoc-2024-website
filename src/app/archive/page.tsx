import React from "react";
import "../../cssFiles/archive.css";


function page() {
  return (
    <div className="main-archive">
      <header className="header">
      <a href="#" className="logo"><img src="https://d33wubrfki0l68.cloudfront.net/4e39c7238cdfd48eccdfb5e1835170ec52e5f614/bd0b1/assets/img/jwoc_logo_sticker.svg" alt="" /></a>

      <input type="checkbox" id="check" />
      <label className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        <a href="#" className="nav-item" >Home</a>
        <a href="#" className="nav-item" >About</a>
        <a href="#" className="nav-item" >Gallery</a>
        <a href="#" className="nav-item" >Services</a>
        <a href="#" className="nav-item" >Contact</a>
      </nav>
    </header>
    </div>
  );
}

export default page;
