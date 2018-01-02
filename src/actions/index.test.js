import configureStore from 'redux-mock-store'
import promise from 'redux-promise'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'


import { translateWord, TRANSLATE_WORD } from './index'

describe('translateWord action', () => {

  it('should return empty data', () => {
    const expectedPayload = { type: TRANSLATE_WORD, payload: {data: ""} }
    expect(translateWord()).toEqual(expectedPayload)
  })

  it('should return translation', () => {
    const middlewares = [promise]
    const mockStore = configureStore(middlewares)
    const store = mockStore({})

    const expectedAction = { type: TRANSLATE_WORD, payload: {data: "собака"} }

    var mock = new MockAdapter(axios);
    mock.onGet('http://localhost:3001/?word=dog&from=en&to=ru').reply(200, {
      data: 'собака'
    });

    return store.dispatch(translateWord('dog', 'en', 'ru'))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0].payload.data).toEqual(expectedAction.payload)
      expect(actions[0].type).toEqual(expectedAction.type)
    })
  })
})
