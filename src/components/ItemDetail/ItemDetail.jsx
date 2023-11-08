import { useState } from "react"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return(
        <article className="product">
            <header>
                <h2>
                    {name}
                </h2>
            </header>     
            <picture>
                <img src={img} alt={name}>
                </img >
            </picture>   
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer >
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'> Terminar Compra </Link>
                    ) : 
                    (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail