import React, { useContext } from "react";
import {MdOutlineShoppingCart} from "react-icons/md"
import CartContext from "../../Context/CartContext"
import {Link}  from 'react-router-dom'

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    return(
        <div className="cart-container">
                <Link to='/cart'>
                    <button>
                        <MdOutlineShoppingCart/>  
                        <span className="item-count">{totalItems}</span>
                    </button>                    
                </Link>                               
        </div>
    )
}

export default CartWidget