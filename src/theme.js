import { extendTheme, theme as base } from "@chakra-ui/react"

const colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#ffffff',
  grey: {
    500: '#494949',
    300: '#8A8F93',
    100: '#E2E2E2'
  },
  primary: {
    500: '#456EFF',
  },
  success: {
    500: '#00BD35',
  },
}

const fonts = {
  gothic: `'CenturyGothicPro', ${base.fonts?.body}`,
  gothicBold: `'CenturyGothicProBold', ${base.fonts?.body}`,
}

const theme = extendTheme({ colors, fonts });
export default theme;