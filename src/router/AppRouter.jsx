import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivaterRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

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
