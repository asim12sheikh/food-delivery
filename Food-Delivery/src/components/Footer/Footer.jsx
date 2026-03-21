import React from 'react'
import "./Footer.css"
import {asset} from "../../../assets/asset"


const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='footer-content'>
        <div className="footer-left">
      <img src={asset.logo} alt="" />
      <p>We deliver fresh and delicious food right to your doorstep.
        Order your favourite meals anytime and enjoy fast,reliable service.
      </p>
      <div className='footer-icons'>
        <img src={asset.facebook_icon} alt="" />
        <img src={asset.linkedin_icon} alt="" />
        <img src={asset.linkedin_icon} alt="" />
      </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
       <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
       </ul>
        </div>
       <div className="footer-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+1-222-333-7485</li>
          <li>contact@tomato.com</li>
        </ul>
       </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
