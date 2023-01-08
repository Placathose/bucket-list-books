import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <div>
       <Box 
        position="fixed" 
        top="0" 
        zIndex="10" 
        w="100%" 
        bg="teal.100"
      >
        <Flex 
          m="0 auto" 
          maxW={{ '2xl':"1240px", xl: '1100px' }} 
          px={{ sm:"30px", md:'60px', lg: '50px', xl: '0px' }} 
          py="20px" 
          alignItems="center"
        >    
          <Box fontWeight="900" fontSize="20px">
            {/* <NavItem
              title='Wyatt.'
              href='/'
            /> */}
            BLBooks
          </Box>
        
          <Spacer/>
          <Spacer/>
          <Spacer/>

          <Flex display={{ sm:"none", md:"Flex" }}>
            <Box fontSize="16px"  mr="20px" fontWeight="500">
              {/* <NavItem
                  title='myLab'
                  href='/mylab'
                /> */}
                Log in
            </Box>

            <Box fontSize="16px"  mr="20px" fontWeight="500">
              {/* <NavItem
                  title='blog'
                  href='/blog'
                /> */}
                Sign up
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box mb="71px"></Box>
    </div>
  )
}
