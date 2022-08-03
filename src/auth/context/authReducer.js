import { types } from '../types/types'

// Los reducers son funciones puras que reciben el state y un action y devuelven el nuevo state

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      }

    case types.logout:
      return {
        logged: false,
      }

    default:
      return state
  }
}
