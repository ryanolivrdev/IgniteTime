import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
import { CyclesProvider } from './CyclesContext'

export function GlobalContext({ children }: any) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesProvider>{children}</CyclesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
