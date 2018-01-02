import axios from 'axios'
export const TRANSLATE_WORD = 'translate_word'

const BASE_URL = 'http://localhost:3001/'

export function translateWord (word, from, to) {
  const request = word ? axios.get(`${BASE_URL}?word=${word}&from=${from}&to=${to}`) : {data: ''}

  return {
    type: TRANSLATE_WORD,
    payload: request
  }
}
