import {useState, useEffect, useMemo} from 'react'
import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer= ({greeting}) =>{
    
    const[products, setProducts] = useState([])    
    const {categoryId} = useParams()
    const asyncFunc = useMemo(() => (categoryId ? getProductsByCategory : getProducts), [categoryId]);
    
    useEffect(() => {
        asyncFunc(categoryId)
            .then(response => {
                if (Array.isArray(response)) {
                    setProducts(response);
                }
            })
            .catch(console.error);
    }, [categoryId, asyncFunc]);

    return (
        <div>
            {!categoryId ? (<h1>Bienvenidos</h1>) : (<h1>{categoryId}</h1>)}
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer