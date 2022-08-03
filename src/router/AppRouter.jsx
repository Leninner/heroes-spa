import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivaterRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage />} />

        <Route
          path='/*'
          element={
            <PrivaterRoute>
              <HeroesRoutes />
            </PrivaterRoute>
          }
        />
      </Routes>
    </>
  )
}
