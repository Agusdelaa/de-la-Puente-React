import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Text, Flex, Box, Center, Spacer } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
  const { id } = useParams()


  const productosFiltrados = productos.filter((p) => p.id == id)
  //Me filtra un unico producto, (iguala id q tiene el producto con el q recibe del params (url))
  
  return (
    <div>
      <Flex flexWrap="wrap" justifyContent="space-around" alignItems="" gap={4}>
        { productosFiltrados.map((producto) => { 
        // productos.map((producto) => {
          return (
            <div key={producto.id}>

              <Card maxW='sm' className='asd'>
                <Box>
                  <CardBody className='asd'>
                    <Image
                      src={producto.image}
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>{producto.title}</Heading>
                      <Text>
                        {producto.description}
                      </Text>
                      <Text color='blue.600' fontSize='2xl'>
                        ${producto.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter className='centerButton' >
                    <ButtonGroup spacing='2' className='centerButton' >
                      
                      <ItemCount />
                    </ButtonGroup>
                  </CardFooter>
                </Box>
              </Card>
            </div>
          )
        })}
      </Flex>
    </div>


  )
}

export default ItemDetail