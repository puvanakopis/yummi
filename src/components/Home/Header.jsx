import React from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='Header flex items-center justify-center h-screen bg-gray-200'>
      {/* <div className='div1 w-3/10'>
          <div className="div1-1 h-1/5">
            Limited Offer!
          </div>
          <div className="div1-2 h-3/5 flex items-center justify-center">
            Savor <br /> the <br /> Flavor!
          </div>
          <div className="div1-3 h-1/5 flex items-end justify-end">
            <img src={assets.headerBg1} alt="" />
          </div>
      </div>
      <div className='div2 w-4/10 flex items-center justify-center'>
          <img className='headerImg' src={assets.headerImg} alt="" />
      </div>
      <div className='div3 w-3/10'></div> */}
      <img src={assets.Banner} alt="" />
    </div>
  )
}

export default Header