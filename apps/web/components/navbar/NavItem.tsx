import { Box, Button, ButtonProps, Icon, useColorMode } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import React, { ReactText } from 'react'
import { useRouter } from 'next/router'

interface INavItemProps extends ButtonProps {
  icon: IconType
  children: ReactText
  route: string
  active: boolean
  onClose?: () => void
  openInNewTab?: boolean
}

const NavItem = ({
  icon,
  children,
  route,
  active,
  onClose,
  openInNewTab = false,
  ...props
}: INavItemProps) => {
  const { colorMode } = useColorMode()
  const colors = {
    light: {
      background: { base: 'transparent', hover: 'gray.600', active: 'black' },
      color: { base: 'black', hover: 'white', active: 'white' },
    },
    dark: {
      background: { base: 'transparent', hover: 'gray.200', active: 'gray.100' },
      color: { base: 'white', hover: 'black', active: 'black' },
    },
  }
  const router = useRouter()
  return (
    <Box>
      <Button
        variant="link"
        style={{ textDecoration: 'none' }}
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        minWidth="calc(100% - 25px)"
        w="max-content"
        textAlign="left"
        onClick={async () => {
          openInNewTab ? window.open(route) : await router.push(route)
          if (onClose) onClose()
        }}
        justifyContent="flex-start"
        bg={colors[colorMode]['background'][active ? 'active' : 'base']}
        color={colors[colorMode]['color'][active ? 'active' : 'base']}
        _hover={{
          bg: colors[colorMode]['background'][active ? 'active' : 'hover'],
          color: colors[colorMode]['color'][active ? 'active' : 'hover'],
        }}
        {...props}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Button>
    </Box>
  )
}

export default NavItem
