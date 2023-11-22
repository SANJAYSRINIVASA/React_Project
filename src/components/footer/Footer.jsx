import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" style={{marginTop:"5%"}}>
      <div className="footer-content">
        <p style={{color:"black",fontSize:"24px"}}>© 2023 Your Website</p>
        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;