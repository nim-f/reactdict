import { FETCH_WORDS } from '../actions'

export default function (state = {}, action) {
  console.log(action.type)

  switch (action.type) {
    case(FETCH_WORDS):
      return action.payload
    default:
      return state
  }
}