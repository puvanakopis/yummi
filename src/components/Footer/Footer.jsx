import React from 'react'
import "./Footer.css"
import { useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(path);
  };


  return (
    <div className='Footer flex items-center justify-center'>
      <div className='f1 w-3/10 flex flex-col'>
        <div onClick={() => handleNavigation("/")} className="logo cursor-pointer h-1/2">
            <div className="logo-1"> Yummi </div>
            <div className="logo-2"> FOOD & RESTAURANT</div>
        </div>
        <div className="social_media flex h-1/2">
           <div className='media'><FaFacebookF /></div>
           <div className='media'><BiLogoInstagramAlt /></div>
           <div className='media'><IoLogoTwitter /></div>
           <div className='media'><RiLinkedinFill /></div>
        </div>
      </div>
      <div className='f2 w-2/10'>
          <h1>Main Menu</h1>
          <ul>
            <li  onClick={() => handleNavigation("/")}>Home</li>
            <li  onClick={() => handleNavigation("/menu")}>Menu</li>
            <li  onClick={() => handleNavigation("/About")}>About us</li>
            <li  onClick={() => handleNavigation("/Contact")}>contact us</li>
          </ul>
      </div>
      <div className='f3 w-2/10'>
      <h1>Useful links</h1>
          <ul>
            <li  onClick={() => handleNavigation("/OrderItem")}>Orders</li>
            <li  onClick={() => handleNavigation("/login")}>Log In</li>
          </ul>
      </div>
      <div className='f4 w-2/10'>
      <h1>Contact Us</h1>
          <ul>
            <li>yummi@gmail.com</li>
            <li>+9465 145 254 45</li>
            <li onClick={() => handleNavigation("/")}>www.yummi.com</li>
          </ul>
      </div>      
    </div>
  )
}

export default Footer
