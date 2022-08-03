import { authReducer } from '../../../src/auth'
import { types } from '../../../src/auth/types/types'

describe('Pruebas sobre auth Reducer', () => {
  const initialState = {
    logged: false,
  }

  const user = {
    id: 'ABC',
    name: 'Juan',
  }

  test('Debe retornar el estado por defecto', () => {
    const state = authReducer(initialState, {})

    expect(state).toEqual(initialState)
  })

  test('Debe retornar el estado con el usuario logueado', () => {
    const action = {
      type: types.login,
      payload: user,
    }

    const state = authReducer(initialState, action)

    expect(state).toEqual({
      logged: true,
      user,
    })
  })

  test('Debe de borrar el nombre de usuario y logged en false', () => {
    const stateLogged = {
      logged: true,
      user,
    }

    const action = {
      type: types.logout,
    }

    const state = authReducer(initialState, action)

    expect(state).not.toEqual(stateLogged)
    expect(state).toEqual({ logged: false })
    expect(state).not.toContain(user)
  })
})
