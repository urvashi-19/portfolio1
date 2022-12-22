import "./FooterStyles.css"

import React from 'react'
 import {FaHome , FaPhone , FaMailBulk ,FaFacebook , FaTwitter ,FaLinkedin , FaInstagram} from "react-icons/fa";
//  import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
           <div div className = "location">
            <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
             
            <div>
            <p>Najafgarh , New Delhi , pincode-110043.</p>
            <p>India
           
            </p>
        </div>
       </div>
    
       <iframe width="388" height="264" id="gmap_canvas" src="https://maps.google.com/maps?q=najafgarh&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <div className="phone">
            <h4><a href="tel:123-123-123"><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>123-123-123</a></h4>
        
       </div>
       <div className="email">
            <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=0308urvashi@gmail.com"><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>0308urvashi@gmail.com</a>
        
       </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>“Beginnings are happy never-endings as long as you remember where you started from.” “What liberates you lies in the knowledge of the soul.” “The only means to change your future is to change your past thoughts.” “As long as you do good, the end will never be bad, and if it's bad then it's not the end.”
            </p>
            <div className="social">
            <a href="https://www.facebook.com/login/" target="_blank"><FaFacebook  size={30} style={{color:"#fff",marginRight: "1rem"}}/></a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank"><FaInstagram  size={30} style={{color:"#fff",marginRight: "1rem"}}/></a>
            <a href="https://www.linkedin.com/login" target="_blank"><FaLinkedin  size={30} style={{color:"#fff",marginRight: "1rem"}}/></a>
            <a href="https://twitter.com/i/flow/login" target="_blank"><FaTwitter size={30} style={{color:"#fff",marginRight: "1rem"}}/></a>
            
            
            

            </div>
        </div>

      </div>
    </div>
  );
};

export default Footer
