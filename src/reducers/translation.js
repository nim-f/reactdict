import { TRANSLATE_WORD } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case(TRANSLATE_WORD):
      return action.payload
    default:
      return state
  }
}