import React from 'react'
import "./Footer.css"
import {asset} from "../../../assets/asset"
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='footer-content'>
        <div className="footer-left">
      <Link to="/"> <img className='logoo' src={asset.logo} alt="" /></Link>
      <p>We deliver fresh and delicious food right to your doorstep.
        Order your favourite meals anytime and enjoy fast,reliable service.
      </p>
      <div className='footer-icons'>
        <a href="https://www.facebook.com/share/17953gjhq9/" target='_blank' rel='noreferer'><img src={asset.facebook_icon} alt="Facebook" /></a>
        <a href=" https://www.linkedin.com/in/sheikh-wasim-7b724532a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noreferrer'><img src={asset.linkedin_icon} alt="LinkedIn" /></a>
       
      </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
       <ul>
        <Link to="/"><li>Home</li></Link>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
       </ul>
        </div>
       <div className="footer-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+91 7077342429</li>
        <a href="mailto:contact@delivora.com" target='_blank'>contact@Delivora.com</a>
        </ul>
       </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 © Delivora.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
