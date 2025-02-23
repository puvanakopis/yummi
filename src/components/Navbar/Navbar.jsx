import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { OrderCountContext } from "../../components/context/OrderCountContext";
import { MdOutlineAccountCircle } from "react-icons/md";


const Navbar = ({setShowLogin}) => {
  const navigate = useNavigate();
  const location = useLocation();


  const { orderCount } = useContext(OrderCountContext);

  useEffect(() => {
    // console.log("Navbar order count:", orderCount);
  }, [orderCount]);
  

  // Extract current pathname and remove the first "/"
  const currentPath = location.pathname.replace("/", "") || "Home";


  return (
    <div className="navbar items-center justify-between px-6 py-4">
      <div className="first flex items-center">
        <div onClick={() => navigate("/")} className="logo w-1/5 cursor-pointer">
          <div className="logo-1">Yummi</div>
          <div className="logo-2">FOOD & RESTAURANT</div>
        </div>
        <div className="search-bar">
          <div>
            <input
              type="text"
              placeholder="Search for products, categories or brands..."
            />
          </div>
        </div>
        <div className="like-item">
          <MdFavoriteBorder />
          <div className="dot">0</div>
        </div>
        <div onClick={() => navigate("/OrderItem")} className="order-item">
          <LiaShoppingBagSolid />
          <div className="dot">{orderCount}</div>
        </div>
        <div onClick={() => navigate("/login")} className="login">
          <div onClick={()=>setShowLogin(true)}><MdOutlineAccountCircle /></div>
        </div>
      </div>

      <div className="last">
        <ul className="flex items-center justify-center gap-[5vw]">
          <Link to="/" className={currentPath === "Home" ? "active" : ""}>
            Home
          </Link>
          <Link to="/Menu" className={currentPath === "Menu" ? "active" : ""}>
            Menu
          </Link>
          <Link to="/About" className={currentPath === "About" ? "active" : ""}>
            About
          </Link>
          <Link
            to="/Contact"
            className={currentPath === "Contact" ? "active" : ""}
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;