import "./FooterStyle.css";
import React from 'react';
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                    <div>
                        <p>123 Housing Society</p>
                        <p>Bangalore.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                    5600121234</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                    info@gmai.com</h4>
                
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="social">
                    
                <FaFacebook size={20} style={{ color:"#fff", marginRight:"2rem" }}
                />
                <FaTwitter size={20} style={{ color:"#fff", marginRight:"1rem" }}
                />
                <FaLinkedin size={20} style={{ color:"#fff", marginRight:"1rem" }}
                />
                    
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Footer