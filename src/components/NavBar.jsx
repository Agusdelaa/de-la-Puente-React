import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer

} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
      <div>
        <Flex>
          <Box p='6'>
            <h2 className='white'>Deportes-Store</h2>
          </Box>
          <Spacer />
          <Box p='6'>
            <div className='black'>
              <Menu>
                <MenuButton >
                  Secciones
                </MenuButton>
                <MenuList>
                  <MenuItem>Camisetas</MenuItem>
                  <MenuItem>Botines</MenuItem>
                  <MenuItem>Zapatillas</MenuItem>
                  <MenuItem>Conjutos</MenuItem>
                  <MenuItem>Accesorios</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </Box>
          <Spacer />
          <Box>
            <CartWidget />
          </Box>
        </Flex>
      </div>
    </>
  )
}

export default NavBar