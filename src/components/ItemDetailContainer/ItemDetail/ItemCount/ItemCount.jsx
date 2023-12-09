import { useState } from "react";   
import './ItemCount.css'

const ItemCount = ({Stock, initial, onAdd, error})=>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < Stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div>
            {Stock > 0 && (
                <div className="stock">
                    <button onClick={decrement}>-</button>
                    <h4>{quantity}</h4>
                    <button onClick={increment}>+</button>
                </div>
            )}
            <div>
               
                {Stock > 0
                ?  <button onClick={() => onAdd(quantity)} disabled={!Stock}>Agregar al carrito</button>
                : <h2>SIN STOCK</h2>
                }                
            </div>
        </div>
    )
}

export default ItemCount