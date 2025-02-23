import React from 'react'
import "./Offers.css"
import { Offer } from '../../assets/assets'

const Offers = () => {

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  return (
    <div className='Offers'>
         <h1 className='MainHeading'>Featured Offers and Deals</h1>
         <div className='flex div'>
          <div className="div1 w-1/2 ScrollingAnimation">
              <img src={Offer.Offers1} alt="" />
          </div>
          <div className="div2 w-1/2">
             <div className='div2-1 h-3/6 ScrollingAnimation'>Buy 1 Pizza, <br /> Get 1 Free</div>
             <div className='div2-2 h-1/6 ScrollingAnimation'>Hurry! Offer Ends in 2 Hours</div>
             <div className='div2-3 mainButton h-2/6'>Browse Pizzas</div>
          </div>
         </div>
    </div>
  )
}

export default Offers
