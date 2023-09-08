import React, { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  Center ,
  Box,
  Flex,
  Button,
  Spacer

} from '@chakra-ui/react'

const ItemCount = () => {

  const [contador, setContador] = useState(0)

  const confimarCompra  = () => {
    alert("🙏🏼 Gracias, Compraste " + contador + " Productos 🙏🏼")
    setContador(0)
  }

  return (
    <>
    <div className='center'>
    <Center >
      <Flex >
          <Box px="2" >
            <button className='md-2' onClick={() => contador < 10 ? setContador(contador + 1) : setContador(10)}>+</button>
          </Box>
          <Box px="2">
            <p className='md-2'>{contador}</p>
          </Box>
          <Box px="2">
            <button className='md-2' onClick={() =>  contador > 0 ? setContador(contador - 1) : setContador(0)}>-</button>
          </Box>
          <Box px="2">
          <Button variant='solid' colorScheme='blue' className='centerButton' onClick={confimarCompra} >
                        Comprar
          </Button>
          </Box>       
      </Flex>
      </Center > 
      </div>
    </>
  

    
  )
}

export default ItemCount
