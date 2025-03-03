import { useState, useContext } from "react";
import "./ItemDetails.css";

// old
import { ViewContext } from "../../components/context/Context";
import { MyContext } from "../../components/context/OrderContext";
import { OrderCountContext } from "../../components/context/OrderCountContext";

//  new add
// import { AppContext } from "../../components/context/AppContext";



const ItemDetails = () => {

  // old

  // Get item details from ViewContext
  const { items } = useContext(ViewContext);

  // // Add item to OrderContext
  const { addItem } = useContext(MyContext);

  // Update order count
  const { setCount } = useContext(OrderCountContext);



//  new add
  // const { items, setCount } = useContext(AppContext);

  // State for order count
  const [currentCount, setCurrentCount] = useState(1);

  // Decrease count
  const handlePrev = () => {
    if (currentCount > 1) setCurrentCount(currentCount - 1);
  };

  // Increase count
  const handleNext = () => {
    setCurrentCount(currentCount + 1);
  };

  // Add item to the cart and update order count
  const addOrderNow = (item) => {
    addItem({ ...item, quantity: currentCount });

    setCount((prevCount) => prevCount + currentCount);

    // Use a friendly notification instead of alert (e.g., toast or modal)
    alert(`Added to Cart: ${item.Name}\nQuantity: ${currentCount}`);
  };

  return (
    <div className="ItemDetails">
      <div className="item">
        <div className="divMainHeading">
          <h1 className="MainHeading">{items.Name}</h1>
        </div>
        <div className="itemDec">
          <div className="itemDecImg w-3/7">
            <img src={items.Img} alt={items.Name} />
          </div>
          <div className="itemDecPrice w-4/7">
            <div className="itemDecPrice1">{items.desc}</div>
            <div className="itemDecPrice2">
              {items.brand && (
                <div className="itemDecPrice2-1">
                  <div className="itemDecPrice2-1-1">Brand</div>
                  <div className="itemDecPrice2-1-2">{items.brand}</div>
                </div>
              )}
              {items.flavor && (
                <div className="itemDecPrice2-1">
                  <div className="itemDecPrice2-1-1">Flavour</div>
                  <div className="itemDecPrice2-1-2">{items.flavor}</div>
                </div>
              )}
              {items.dietType && (
                <div className="itemDecPrice2-1">
                  <div className="itemDecPrice2-1-1">Diet Type</div>
                  <div className="itemDecPrice2-1-2">{items.dietType}</div>
                </div>
              )}
              {items.weight && (
                <div className="itemDecPrice2-1">
                  <div className="itemDecPrice2-1-1">Weight</div>
                  <div className="itemDecPrice2-1-2">{items.weight}</div>
                </div>
              )}
              {items.speciality && (
                <div className="itemDecPrice2-1">
                  <div className="itemDecPrice2-1-1">Speciality</div>
                  <div className="itemDecPrice2-1-2">{items.speciality}</div>
                </div>
              )}
              {items.info && (
                <div className="itemDecPrice2-1">
                  <div className="itemDecPrice2-1-1">Info</div>
                  <div className="itemDecPrice2-1-2">{items.info}</div>
                </div>
              )}
            </div>
            <div className="itemDecPrice3">
              <div className="itemDecPrice3-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  {"⭐".repeat(5)}
                  <span className="text-sm text-gray-700">(50 Reviews)</span>
                </div>
              </div>
              <div className="itemDecPrice3-2">Rs 500.00</div>
              <div className="itemDecPrice3-3 flex flex-row">
                {/* Quantity Selector */}
                <div className="w-1/2">
                  <div className="ProductCard flex items-center gap-2 mainButton">
                    <button
                      onClick={handlePrev}
                      disabled={currentCount === 1}
                      className={`cursor-pointer ${currentCount === 1 ? "opacity-50" : ""}`}
                    >
                      &lt;
                    </button>
                    <span className="text-lg font-semibold">{currentCount}</span>
                    <button
                      onClick={handleNext}
                      className="cursor-pointer"
                    >
                      &gt;
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div
                  className="w-1/2 mainButton itemDecPrice3-3-2"
                  onClick={() => addOrderNow(items)}
                >
                  Add To Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
