import { useContext } from 'react'
import { ShopContext } from "../../Context/shopContext";

export const Product = (props) => {

  const {id, productName, price} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);



  return (
    <div className="product">
        
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>
                ${price}
            </p>
            <button 
            className="add-btn"
            onClick={() => addToCart(id)}
            >
                Add To Cart {cartItems[id] > 0 && <>({cartItems[id]})</>}
            </button>
        </div>

    </div>
  )
}
