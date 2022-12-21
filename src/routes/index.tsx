import { Routes, Route } from 'react-router-dom'

import { History, Home } from '../pages'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  )
}
