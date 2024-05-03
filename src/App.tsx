import { ThemeProvider } from 'styled-components'

import Home from './pages/Home.tsx'
import { GlobalStyles } from './styles/global.ts'
import { defaultTheme } from './styles/themes.ts'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
