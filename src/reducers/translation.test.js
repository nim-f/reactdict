import translation from './translation'
import { TRANSLATE_WORD } from '../actions'

describe('Translate Reducer', () => {
  it('has a default state', () => {
    expect(translation(undefined, {type: 'unexpected'})).toEqual({})
  })

  it('returns new state', () => {
    expect(translation(undefined, {
      type: TRANSLATE_WORD,
      payload: {data: 'data'}
    })).toEqual({data: 'data'})
  })
})