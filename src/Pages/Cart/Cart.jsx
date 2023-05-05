import { useContext } from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../Context/shopContext';
import { CartItem } from './CartItem';

import { useNavigate } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const total = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      
      {total > 0 &&
        <div>
          <h1>A wise decision to buy from me</h1>
          <h2>You will never regret that in your whole life</h2>
        </div>
      }
      <div className={`cart-items ${PRODUCTS.every((product) => cartItems[product.id] === 0) ? 'inactive' : ''}`}>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      
      {total > 0 ?
        <div className="checkout">
          <p>Total: ${total}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Check Out</button>
        </div>
        :
        <h1>Empty Cart, You are missing your life opportunity</h1>
      }
    </div>
  )
}

export default Cart