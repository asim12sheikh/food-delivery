import React from 'react'
import "./AppDonlod.css"
import { asset } from '../../../assets/asset'


const AppDonlod = () => {
  return (
    <div id='app-donlod' className='app-donlod'>
      <p>For Better Experience Download <br /> Tomato App </p>
      <div className='app-donlod-platforms'>
        <img src={asset.play_store} alt="" />
        <img src={asset.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDonlod
