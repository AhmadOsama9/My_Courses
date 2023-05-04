import { useContext } from 'react'
import { ShopContext } from '../../Context/shopContext';

export const CartItem = (props) => {

  const { id, productName, price } = props.data;  
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cart-item">
        <p>The image will be here</p>

        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) } />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
