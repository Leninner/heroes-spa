import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
  logged: false,
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user, // !!user es un operador de descomposición que devuelve true si el valor es distinto de null o undefined
    user,
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name,
    }

    const action = {
      type: types.login,
      payload: user,
    }

    localStorage.setItem('user', JSON.stringify(user))

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ ...authState, login }}>
      {children}
    </AuthContext.Provider>
  )
}
