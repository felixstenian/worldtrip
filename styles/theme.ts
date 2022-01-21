import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    text: {
      'light': '#F5F8FA',
      'dark': '#47585B'
    },
    info: {
      'light': '#DADADA',
    },
    highlight: '#FFBA08',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        color: 'text.dark'
      }
    }
  }
})