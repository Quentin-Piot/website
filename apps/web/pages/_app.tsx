import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import MainLayout from '../layouts/MainLayout'
import 'utils/translation/translation'

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      // styles for the `a`
      a: {
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  colors: {
    primary: '#ffffff',
    secondary: '#eeeeee',
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          backgroundColor: 'gray.300',
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
