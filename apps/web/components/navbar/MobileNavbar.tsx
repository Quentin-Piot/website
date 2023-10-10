import React from 'react'
import {
  Flex,
  FlexProps,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import LanguageSelector from 'components/navbar/LanguageSelector'

interface IMobileProps extends FlexProps {
  onOpen: () => void
}

const MobileNavbar = ({ onOpen, ...rest }: IMobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Heading
        display={{ base: 'flex', md: 'none' }}
        fontSize={{ base: 'xl', md: '2xl' }}
        fontFamily="monospace"
        fontWeight="bold"
        pl={6}

      >
        Quentin Piot
      </Heading>

      <HStack spacing={{ base: '0', md: '6' }}>
        <LanguageSelector />
        <IconButton
          aria-label="select color"
          onClick={toggleColorMode}
          icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
        />
      </HStack>
    </Flex>
  )
}

export default MobileNavbar
