import React, { useMemo } from 'react'
import {
  Box,
  BoxProps,
  CloseButton,
  Divider,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiHome } from 'react-icons/fi'
import { IconType } from 'react-icons'
import NavItem from './NavItem'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { AiFillExperiment, AiFillLinkedin, AiFillPlayCircle, AiFillProject } from 'react-icons/ai'
import { FaSchool } from 'react-icons/fa'
import { GiWorld } from 'react-icons/gi'

export interface ILinkItemProps {
  name: string
  icon: IconType
  route: string
}

interface ISidebarProps extends BoxProps {
  onClose: () => void
}

const Sidebar: React.FC<ISidebarProps> = ({ onClose, ...rest }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const linkItems = useMemo<Array<ILinkItemProps>>(
    () => [
      { name: t('components.navbar.items.projects'), icon: FiHome, route: '/' },
      {
        name: t('components.navbar.items.experience'),
        icon: AiFillExperiment,
        route: '/experience',
      },
      { name: t('components.navbar.items.education'), icon: FaSchool, route: '/education' },
      { name: t('components.navbar.items.cv'), icon: AiFillProject, route: '/cv' },
    ],
    [t],
  )
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='5' justifyContent='space-between'>
        <Heading fontSize='2xl' fontFamily='monospace' fontWeight='bold' pl={4}
        >
          Quentin Piot
        </Heading>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          route={link.route}
          active={link.route === router.asPath}
          suppressHydrationWarning
          onClose={onClose}
        >
          {link.name}
        </NavItem>
      ))}
      <Divider />
      <NavItem
        icon={AiFillLinkedin}
        route='https://www.linkedin.com/in/quentin-piot/'
        active={false}
        suppressHydrationWarning
        onClose={onClose}
        openInNewTab
      >
        LinkedIn
      </NavItem>
      <NavItem
        icon={AiFillPlayCircle}
        route='https://rhythm-game.quentinpiot.com/'
        active={false}
        suppressHydrationWarning
        onClose={onClose}
        openInNewTab
      >
        Rust game (WIP)
      </NavItem>

      <NavItem
        icon={GiWorld}
        route='https://world.quentinpiot.com/'
        active={false}
        suppressHydrationWarning
        onClose={onClose}
        openInNewTab
      >
        QQ & Juju - SWT
      </NavItem>
    </Box>
  )
}

export default Sidebar
