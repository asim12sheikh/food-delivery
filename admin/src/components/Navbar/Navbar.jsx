import React from 'react'
import "./Navbar.css"
import { asset } from "../../../assets/asset"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <img className='logo' src={asset.logo} alt="" />
     <p className='admin-text'>Admin Panel</p>
      </div>
      
    <img className='profile' src={asset.profile_image} alt="" />
    
    </div>
    
  )
}

export default Navbar
