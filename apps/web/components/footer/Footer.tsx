import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <Button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      p={0}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  )
}

const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      height={{ base: '250px', md: '190px' }}
    >
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
        <Image src="/logo.png" alt="logo" width={10} />
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>{t('components.navbar.items.home')}</Link>
          <Link href={'/experience'}>{t('components.navbar.items.experience')}</Link>
          <Link href={'/education'}>{t('components.navbar.items.education')}</Link>
          <Link href={'/projects'}>{t('components.navbar.items.projects')}</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'100%'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>{t('footer.builtFromScratch')}</Text>
          <Stack direction={'row'} spacing={6} display={{ base: 'none', md: 'block' }}>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/quentin-piot/'}>
              <AiFillLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
