import React from 'react'
import { Flex, Button, useColorMode } from '@chakra-ui/core'
import { borderColor } from './configs'
import Logo from './Logo'

const DashboardLayout: React.FC<{ from?: 'drawer' }> = ({ from }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      height='100%'
      width={from ? '100%' : '220px'}
      position={from ? 'inherit' : 'fixed'}
      margin={0}
      top={0}
      left={0}
      flexDirection='column'
      display={from ? 'flex' : ['none', 'none', 'none', 'flex']}
      borderRight={from ? 'none' : '1px solid'}
      borderColor={borderColor[colorMode]}
      backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'}
    >
      {!from && <Logo />}

      <Flex
        height='100%'
        flexDirection='column'
        backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'}
        padding={from ? '1rem 1rem 5rem 1rem' : '1rem'}
      >
        <Button isActive justifyContent='start' variant='ghost'>
          Menu 1
        </Button>

        <Button justifyContent='start' variant='ghost'>
          Menu 2
        </Button>

        <Button justifyContent='start' variant='ghost'>
          Menu 3
        </Button>

        <Button
          marginTop='auto'
          backgroundColor='purple.500'
          height='50px'
          borderRadius='sm'
          variantColor='purple'
          _focus={{ boxShadow: '0 0 0 3px rgba(128, 90, 213, 0.4)' }}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          UPGRADE TO PRO
        </Button>
      </Flex>
    </Flex>
  )
}

export default DashboardLayout
