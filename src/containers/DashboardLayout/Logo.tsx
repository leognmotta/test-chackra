import React from 'react'
import { Flex, Heading, useColorMode } from '@chakra-ui/core'
import { borderColor } from './configs'

const DashboardLayout: React.FC<{ from?: 'drawer' }> = ({ from }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      display={from ? 'flex' : ['none', 'none', 'none', 'flex']}
      justifyContent='center'
      alignItems='center'
      minHeight='70px'
      borderBottom='1px solid'
      borderColor={borderColor[colorMode]}
    >
      <Heading>LOGO</Heading>
    </Flex>
  )
}

export default DashboardLayout
