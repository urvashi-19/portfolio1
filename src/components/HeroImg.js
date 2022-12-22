import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/introbg.jpg";
import {Link } from "react-router-dom";
const HeroImg = () => {
  return (
    
    <div className="hero">
       <div className="mask">
        <img  className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
      <div className="content">
        <p> Hi , I'M A Web Developer.</p>
        <h1>React Developer</h1>
        
      <Link to="/project"  className="btn">Projects</Link>
      <Link to="/contacts" className=" btn btn-light">Contact</Link>
    </div>
    </div>
  );
}

export default HeroImg;
