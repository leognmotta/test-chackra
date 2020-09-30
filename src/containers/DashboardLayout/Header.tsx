import React from 'react'
import {
  Flex,
  useColorMode,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  IconButton,
  AvatarBadge,
  Icon,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Link,
  Text,
} from '@chakra-ui/core'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import Logo from './Logo'
import Sider from './Sider'
import { borderColor } from './configs'

const DashboardLayout: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      position='fixed'
      right={0}
      top={0}
      width='100%'
      gridArea='header'
      padding='1rem'
      maxHeight='70px'
      justifyContent='flex-end'
      alignItems='center'
      borderBottom='1px solid'
      borderColor={borderColor[colorMode]}
      backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'}
    >
      <IconButton
        onClick={onOpen}
        aria-label='Search database'
        variant='ghost'
        size='lg'
        mr='auto'
        display={['flex', 'flex', 'flex', 'none']}
        icon={AiOutlineMenu}
      />

      <Button
        backgroundColor='purple.500'
        borderRadius='sm'
        variantColor='purple'
        leftIcon={() => <BsPlus size={20} />}
        mr='16px'
        _focus={{ backgroundColor: 'purple.600' }}
        _hover={{ backgroundColor: 'purple.600' }}
      >
        ACTION
      </Button>

      <Menu closeOnSelect={false}>
        <MenuButton p='0.6rem' mr='16px'>
          <Icon size='24px' name='bell' />
        </MenuButton>

        <MenuList
          overflowY='scroll'
          mt='200px'
          maxWidth='310px'
          maxHeight='320px'
        >
          <MenuGroup title='Notifications'>
            <MenuItem
              _hover={{ cursor: 'default' }}
              p='1rem'
              borderBottom='1px solid'
              borderColor={borderColor[colorMode]}
            >
              <Text>
                Your invoice was viewed by{' '}
                <Link
                  href='https://react-icons.github.io/search'
                  color='blue.400'
                >
                  Carlos Augusto
                </Link>
                !
              </Text>
            </MenuItem>

            <MenuItem
              _hover={{ cursor: 'default' }}
              p='1rem'
              borderBottom='1px solid'
              borderColor={borderColor[colorMode]}
            >
              <Text>
                Your invoice was viewed by{' '}
                <Link
                  href='https://react-icons.github.io/search'
                  color='blue.400'
                >
                  Carlos Augusto
                </Link>
                !
              </Text>
            </MenuItem>
            <MenuItem _hover={{ cursor: 'default' }} p='1rem'>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Text>
            </MenuItem>

            <MenuItem _hover={{ cursor: 'default' }} p='1rem'>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Text>
            </MenuItem>

            <MenuItem _hover={{ cursor: 'default' }} p='1rem'>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Text>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton>
          <Avatar
            size='md'
            name='Dan Abrahmov'
            src='https://bit.ly/dan-abramov'
          >
            <AvatarBadge size='1em' bg='green.500' />
          </Avatar>
        </MenuButton>

        <MenuList>
          <MenuGroup title='Profile'>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>

          <MenuDivider />

          <MenuGroup title='Help'>
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>

          <MenuDivider />

          <MenuGroup title='Theme'>
            <IconButton
              onClick={toggleColorMode}
              aria-label='Search database'
              variant='ghost'
              width='100%'
              borderRadius='none'
              size='sm'
              justifyContent='flex-start'
              p='15px'
              icon={colorMode === 'dark' ? 'sun' : 'moon'}
            />
          </MenuGroup>
        </MenuList>
      </Menu>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={colorMode === 'dark' ? 'gray.800' : 'white'}
          maxWidth='280px'
        >
          <DrawerHeader padding={0}>
            <Logo from='drawer' />
          </DrawerHeader>
          <DrawerBody padding='0'>
            <Sider from='drawer' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default DashboardLayout
