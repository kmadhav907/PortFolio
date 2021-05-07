import React from 'react';
import image from '../assets/framer_logo_icon.png';
import './styles/Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      Made with &nbsp;
      <div className='footerIcons'>
        <div className='footerIcon'>
          <i className='fab fa-react'></i>
        </div>
        <div className='footerIcon'>
          <i className='fab fa-node-js'></i>
        </div>
        <div className='footerIcon'>
          <img src={image} className='imageIcon' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
