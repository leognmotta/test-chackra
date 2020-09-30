import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core'

import theme from '../styles/theme'

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={theme}>
    <ColorModeProvider>
      <EmotionThemeProvider theme={theme}>
        <CSSReset />
        {children}
      </EmotionThemeProvider>
    </ColorModeProvider>
  </ChakraThemeProvider>
)

export default ThemeContainer
