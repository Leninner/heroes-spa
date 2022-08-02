import { types } from '../types/types'

const inititalState = {
  logged: false,
}

export const authReducer = (state = inititalState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      }

    case types.logout:
      return {
        logged: false,
      }

    default:
      return state
  }
}
