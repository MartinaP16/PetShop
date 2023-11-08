import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Routing = () => {
    return(
        <>
            <BrowserRouter>   
                <NavBar/>     
                    <h1>Bienvenidos</h1> 
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
                        <Route path='*' element = {<h1>404 NOT FOUND</h1>} />
                    </Routes>
            </BrowserRouter>

            
        </>
    )
}

export default Routing