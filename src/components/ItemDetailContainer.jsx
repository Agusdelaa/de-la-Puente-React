
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { Flex } from '@chakra-ui/react'
import Item from './Item'



const ItemDetailContainer = () => {
  const obtenerProd = async () => {

    const response = await fetch("https://fakestoreapi.com/products/")
    //const response = await fetch('https://dummyjson.com/products/')
    const data = await response.json()
    return data

  }

  const [productos, setProductos] = useState([])

  useEffect(() => {
    obtenerProd().then((productos) => setProductos(productos))
  }, [])
  
    return (
      <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={4}>
        
        <ItemDetail productos = {productos}/>
          
      </Flex>
          
  )
}

export default ItemDetailContainer

{/* {
          productos.map((prod)=> {
            return(
              <div key={prod.id} >
                  
              </div>
            )
          })
        }
*/}