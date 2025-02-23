import React from 'react'
import "./About.css"
import { banner } from "../assets/assets" 
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(path);
  };


  return (
    <div className='About'>
      <div className='aboutBanner'><img src={banner.AboutBanner} alt="" /></div>
      <div className='aboutDesc '>
        <h1 className="MainHeading">About Us</h1>
        <div className='aboutDesc-1'>
            Founded in 2017 in Colombo, Sri Lanka, YummiFoodShop.com has quickly become a beloved platform among the Sri Lankan community. Our mission is to make it easier for customers to enjoy delicious meals and send thoughtful gifts to their loved ones. With an innovative menu system, customers can enjoy a buffet-style dining experience where each person selects one starter, main course, and dessert from a broad range of dishes offered by top restaurants across Sri Lanka.
        </div>
        <div className='aboutDesc-2'>
             Yummi Food Shop – Sharing Love, One Meal at a Time.
        </div>
        <div className='mainButton' onClick={() => handleNavigation("/Menu")}>
        Explore Our Menu
        </div>
      </div>
    </div>
  )
}

export default About
