import "./NavbarStyle.css"
import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {FaBars ,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const[click , setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
     const[color , setColor] = useState(false);
     const changeColor = ()=>{
        if(window.scrollY >=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
     };
     window.addEventListener("scroll" , changeColor);
  return (
    <div className = {color ? " header header-bg" : "header" }>
     <Link to="/"><h className="head">Portfolio</h></Link>
     <ul className={click ? "nav-menu active" : "nav-menu"} >
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contacts">Contact</Link>
        </li>
     </ul>
     
     <div className="hamburger" onClick={handleClick}>{click ? (<FaTimes size={40} style={{color:"#fff"}}/>) : (<FaBars size={40} style={{color:"#fff"}}/>)}
           
            
        
        
     </div>
    </div>
  )
}

export default Navbar
