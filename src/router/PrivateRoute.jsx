import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivaterRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)
  const { pathname, search } = useLocation()

  /**
   * In this case, I can use useMemo o useCallback to cache the value of lastPath.
   */
  const lastPath = pathname + search
  localStorage.setItem('lastPath', lastPath)

  return logged ? children : <Navigate to='/login' />
}
