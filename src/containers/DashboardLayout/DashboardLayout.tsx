import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import Header from './Header'
import Sider from './Sider'
import Footer from './Footer'

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Box
      height='100vh'
      padding={['70px 0 0 0', '70px 0 0 0', '70px 0 0 0', '70px 0 0 220px']}
    >
      <Header />

      <Sider />

      <Flex gridArea='main' flexDirection='column' height='100%'>
        <Box as='main' maxWidth='1440px' flexGrow={1} padding='1rem'>
          {children}
        </Box>

        <Footer />
      </Flex>
    </Box>
  )
}

export default DashboardLayout
