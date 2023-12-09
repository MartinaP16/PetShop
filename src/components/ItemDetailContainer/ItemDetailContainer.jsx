import { useEffect, useState } from "react";
import { getProductsById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer =({})=>{
    const [product, setProduct] = useState(null)
    
    const{id} = useParams()
        
    useEffect(() =>{
        getProductsById(id)
            .then(response =>{
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [id])

    return(
        <div className="ItemsContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer