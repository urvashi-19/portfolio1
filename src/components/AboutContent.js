import "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import reactjs from "../assets/reactjs.jpg"
import ecom3 from "../assets/ecom3.avif"
const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>About Me</h1>
        <p>Hi, I'm a web developer enthusiast...  always learning while coding...  #reactjs   #javascript   #nodejs   #express.js   #mongodb </p>
        <Link to="/contacts">
            <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={reactjs} alt="true" className="img" />
            </div>
            <div className="img-stack bottom">
                <img src={ecom3} alt="true" className="img" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent
