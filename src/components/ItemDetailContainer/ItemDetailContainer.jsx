import { useEffect, useState } from "react";
import { getProductsById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer =({})=>{
    const [product, setProduct] = useState(null)
    
    const{id} = useParams()
    console.log(id)
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