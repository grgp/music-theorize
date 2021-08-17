import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
} as const

const theme = extendTheme({
  config,
  colors: {
    white: '#e9e4da',
  },
})

export default theme
