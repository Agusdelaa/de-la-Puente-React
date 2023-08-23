import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"👋🏼 ¡Bienvenid@ a la mejor tienda de deportes! 👋🏼"}/>
    </>
  )
}

export default App