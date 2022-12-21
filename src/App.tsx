import { Router } from './routes'
import { GlobalContext } from './contexts/GlobalContext'

export function App() {
  return (
    <GlobalContext>
      <Router />
    </GlobalContext>
  )
}
