import React, { useEffect, useState } from 'react'
import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../components/navbar/Sidebar'
import MobileNavbar from '../components/navbar/MobileNavbar'
import styles from './MainLayout.module.css'
import DisplacementSphere from 'components/background/DisplacementSphere'
import Footer from 'components/footer/Footer'

interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  return (
    <Box height="100vh" overflow="hidden" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNavbar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} height="100%" position={'relative'} bgColor={'transparent'}>
        {hasMounted && <DisplacementSphere />}

        <div className={styles.container}>
          <div className={styles.innerContainer}>{children}</div>
          <Footer />
        </div>
      </Box>
    </Box>
  )
}

export default MainLayout
