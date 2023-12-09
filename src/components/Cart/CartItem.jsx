import React, { useContext, useEffect  } from 'react';
import { CartContext } from '../Context/CartContext';
import './CartItem.css'
import {Link}  from 'react-router-dom'

const CartItem = () => {
    const { cart, clearCart,removeItem, setCart} = useContext(CartContext);

    const handleClearCart = () => {
        clearCart();
    };

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };
    
    return (
        <div>            
            <h2>Carrito de Compras</h2>
            <div className='Items'>
                            
              {cart && cart.length === 0 ? (
                        <p>El carrito está vacío</p>  
                    ) : 
                    (
                    <div>        
                        <button className='button-Delete' onClick={handleClearCart }>Eliminar Carrito</button>       
                        <Link to='/CheckOut'>
                            <button>Finalizar Compra</button>  
                        </Link>                                                                                                     
                        <ul className="product-list"> 
                            {cart &&
                                cart.map((item) => (
                                <article className="product">    
                                    <li key={item.id} className="product-item">
                                        <p>{item.Nombre}</p>
                                        <picture>
                                            <img src={item.Imagen} alt={item.Nombre}></img >
                                        </picture>  
                                        <p>Precio: ${item.Precio}</p>
                                        <p>Cantidad: {item.quantity}</p>    
                                        <button className='button-Delete' onClick={() => handleRemoveItem(item.id)}>Eliminar producto</button>                                         
                                    </li>
                                </article>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );

  };
  
  export default CartItem;