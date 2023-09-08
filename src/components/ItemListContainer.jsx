import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'





  // let pro = [
  // {id: 1, nombre: "Pelota Rugby", imagen: "🏉", precio: 1500},
  // {id: 2, nombre: "Pelota Volley", imagen: "🏐", precio: 2786},
  // {id: 3, nombre: "Pelota de basquet", imagen: "🏀", precio: 5632},
  // {id: 4, nombre: "Pelota futbol Americano", imagen: "🏈", precio: 9178},
  // {id: 5, nombre: "Pelota futbol", imagen: "⚽", precio: 3512},
  // {id: 6, nombre: "Pelota Beisbol", imagen: "⚾", precio: 32435},
  // {id: 7, nombre: "Guantes", imagen: "🥊", precio: 23133},
  // {id: 8, nombre: "Raqueta ", imagen: "🎾", precio: 31241},
  // {id: 9, nombre: "palo Hockey", imagen: "🏒", precio: 1234},
  // {id: 10, nombre: "dobok", imagen: "🥋", precio: 9999}]


  // const enviarProductos = new Promise ((resolve, reject)=>{
  //   if(productos.length > 0){ 
  //       setTimeout(() => {
  //         resolve(productos)  
  //       }, 2000)
  //   } else {
  //     reject ("Ocurrio un error, no hay productos para cargar")
  //   }
  // })

  // enviarProductos
  //   .then((resultado)=> {
  //       console.log(resultado)
  //   })
  //   .catch ((error)=> {
  //     console.error(error)
  //   })
  const ItemListContainer = ({ greeting }) => {
    const { category } = useParams()
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

  const productosFiltradosCat = productos.filter((producto) => producto.category === category)
  return (
    <>
      {console.log(productosFiltradosCat)}
      {/* <h1 className='center pt-2 white' >{greeting}</h1> */}
      {
        category ? <ItemList productos={productosFiltradosCat} />
                 : <ItemList productos={productos} />       
      }
    </>
  )
}

export default ItemListContainer



