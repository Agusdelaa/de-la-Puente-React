import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import About from './components/About'
import Cart from './components/Cart'
import ItemDetail from './components/ItemDetail'



const App = () => {
  return (
    <BrowserRouter>

        <NavBar />


        <Routes>
              {/* <ItemListContainer greeting={"👋🏼 ¡Bienvenid@ a la mejor tienda de deportes! 👋🏼"}/> */}
            {/* <ItemDetailContainer/> */}
            <Route exact path='/' element= {<ItemListContainer />} />
            {/* <Route exact path='/' element= {<Home />} /> */}
            {/* <Route exact path='/about' element= {<About />} />*/}
            <Route exact path='/cart' element= {<Cart />} /> 
            {/* <Route path='/producto/:id' element ={<ItemDetail />} /> */}
            <Route exact path='/item/:id' element= {<ItemDetailContainer/>} />
            <Route exact path='/category/:category' element = {<ItemListContainer/>} />

         </Routes>
         

    </BrowserRouter>
  )
}

export default App

//El exact lo q hace es mostrar el primer resultado de lo q encuentra en las rutas, se usa el "exact path" para q tenga en cuenta toda la ruta q le mnade y no solo el "/"

