import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from  '../Cart/CartItem'
import CheckOut from '../Cart/CheckoutForm'
import { CartProvider } from '../Context/CartContext'

const Routing = () => {
    return(
        <>
            <BrowserRouter>   
                <CartProvider>
                    <NavBar/>                         
                        <Routes>
                            <Route path='/' element={<ItemListContainer/>}/>
                            <Route path='/:categoryId' element={<ItemListContainer/>}/>
                            <Route path='/Item/:id' element={<ItemDetailContainer/>}/>    
                            <Route path='cart'  element={<Cart/>} />             
                            <Route path='CheckOut'  element={<CheckOut/>} />
                            <Route path='*' element = {<h1>404 NOT FOUND</h1>} />
                        </Routes>
                </CartProvider>
            </BrowserRouter>            
        </>
    )
}

export default Routing