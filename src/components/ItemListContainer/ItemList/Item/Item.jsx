import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id,Nombre,Imagen,Precio,Stock}) =>{
    
    const isOutOfStock = Stock === 0;

    return(
        <article className="product">
            <header>
                <h2>
                    {Nombre}
                </h2>
            </header>
            <picture>
                <img className="Picture" src={Imagen} alt={Nombre} />
            </picture>
            <section>
                <p >
                    Precio: ${Precio}
                </p>
                <p >
                    {isOutOfStock
                        ? "Sin stock" : `Stock disponible: ${Stock}`
                    }
                </p>
            </section>
            <footer >
                <Link to={`../Item/${id}`} >Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item