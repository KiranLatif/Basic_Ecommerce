import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  increaseQty,
  DecreaseQty,
  deleteIndivItems,
} from "../../reduxtoolkit/cartSlice";
import { RxCross2 } from "react-icons/rx";
import { BsCartX } from "react-icons/bs";
import "./cart.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const cartData = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const [cartTotal, setCartTotal] = useState("");
  useEffect(() => {
    const total = cartData.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    setCartTotal(total);
  }, [cartData]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const Increment = (id) => {
    dispatch(increaseQty(id));
  };

  const Decrement = (id) => {
    dispatch(DecreaseQty(id));
  };

  const delItem = (id) => {
    dispatch(deleteIndivItems(id));
  };

  return (
    <div className="cartWrapper">
      {cartData.length === 0 ? (
        <div className="emptyCartWrapper">
          <BsCartX className="emptyCartIcon" />
          <span>Cart is Empty</span>
        </div>
      ) : (
        <>
          <div className="cartHead">
            <button className="clearall" onClick={handleClearCart}>
              Clear All
            </button>
            <div>
              <span>TotalPrice: </span>
              <span>{cartTotal}</span>
            </div>
          </div>

          <div className="cartList">
            {cartData.map((items) => (
              <div key={items.id} className="cartMain">
                <div className="cartProductDataMain">
                  <div className="cartProductImgWrapper">
                    <img src={items.image} alt="product" />
                  </div>
                  <div>
                    <p>{items.name}</p>
                    <p>{items.price}</p>
                  </div>
                </div>
                <div className="cartQtyMain">
                  <RxCross2
                    className="indCartItemDel"
                    onClick={() => delItem(items.id)}
                  />
                  <button onClick={() => Decrement(items.id)}>-</button>
                  <span>{items.qty}</span>
                  <button onClick={() => Increment(items.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
