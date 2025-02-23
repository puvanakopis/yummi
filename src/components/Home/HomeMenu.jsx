import React, { useEffect, useContext } from 'react';
import { FaStar } from "react-icons/fa";
import "./HomeMenu.css";
import { homeMenu } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';
import { OrderCountContext } from "../../components/context/OrderCountContext";
import { ViewContext } from "../../components/context/Context";

const HomeMenu = () => {
  const navigate = useNavigate();

  // ✅ Add Intersection Observer inside useEffect
  useEffect(() => {
    const items = document.querySelectorAll(".HomeMenuItemList");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeIn 0.6s ease-out forwards";
          } else {
            entry.target.style.animation = "none"; // Reset animation
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item)); // Cleanup observer
    };
  }, []); // ✅ Empty dependency array means this will run once on mount

  // Access the context
  const { count, setCount } = useContext(OrderCountContext);
  const { addItem } = useContext(ViewContext);

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(path);
  };

  // Add item to ViewContext
  const handleOrderNow = (item) => {
    addItem(item); 
    setCount(count + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/ItemDetails");
  };

  return (
    <div className='HomeMenu'>
      <div><h1 className='MainHeading'>Most Popular Items</h1></div>
      <div className='HomeMenuItem grid grid-cols-3 gap-4'>
        {homeMenu.map((item, index) => (
          <div key={index} className='HomeMenuItemList'>
            <img src={item.Img} alt={item.Name} />  
            <div className='naming flex flex-cols-2'>
              <div className='name w-4/5'>{item.Name}</div> 
              <div className='rate w-1/5'>
                <FaStar color="gold" style={{ marginRight: "5px" }} /> {item.Rate}
              </div>
            </div>
            <div className='naming2'>
              <div className='price'> Rs {item.Price}.00</div> 
              <div className="order" onClick={() => handleOrderNow(item)}>Order</div>               
            </div>
          </div>
        ))}
      </div>
      <div className='navigate mainButton' onClick={() => handleNavigation("/Menu")}>Menu &gt;&gt;</div>
    </div>
  );
};

export default HomeMenu;
