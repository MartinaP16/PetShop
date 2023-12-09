import { useContext, useState } from "react"
import ItemCount from './ItemCount/ItemCount'
import { Link } from "react-router-dom"
import './ItemDetail.css'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({id, Nombre, Imagen, Categoria, Descripcion, Precio, Stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, Nombre, Precio, Imagen
        }

        addItem(item, quantity)
        console.log(item, quantity);
    }
    
    return(
        <article className="productDetail">
            <header>
                <h2>
                    {Nombre}
                </h2>
            </header>     
            <picture>
                <img src={Imagen} alt={Nombre}>
                </img >
            </picture>   
            <section>
                <p>
                    Categoria: {Categoria}
                </p>
                <p>
                    Descripción: {Descripcion}
                </p>
                <p>
                    Precio: ${Precio}
                </p>
            </section>
            <footer >
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'> Terminar Compra </Link>
                    ) : 
                    (
                        <ItemCount initial={1} Stock={Stock} onAdd={handleOnAdd}/>
                    

                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail