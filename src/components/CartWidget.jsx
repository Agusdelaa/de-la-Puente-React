import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <>
    <Flex>
    <Box pt='4'>
      <h1 className='logo'>🛒</h1>
    </Box>
      <Box pt='6' pr= "6">
      <p className='white'>7</p>
      </Box>
    </Flex>
    </>
  )
}

export default CartWidget