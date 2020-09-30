import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'

const DashboardLayout: React.FC = () => {
  return (
    <Flex
      as='footer'
      padding='1rem'
      justifyContent='center'
      alignItems='center'
    >
      <Heading>FOOTER</Heading>
    </Flex>
  )
}

export default DashboardLayout
