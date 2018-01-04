import axios from 'axios'
import firebase from '../firebase'

export const TRANSLATE_WORD = 'translate_word'
export const FETCH_WORDS = 'fetch_words'

const BASE_URL = 'http://localhost:3001/'
const TABLE = firebase.database()

export function translateWord (word, from, to) {
  const request = word ? axios.get(`${BASE_URL}?word=${word}&from=${from}&to=${to}`) : {data: ''}

  return {
    type: TRANSLATE_WORD,
    payload: request
  }
}

export function saveTranslation (table, word, translation) {
  return dispatch => {
    let translated = {
      word,
      translation
    }
    TABLE.ref(`dict/${table}/${word}`).set(translated)
  }
}

export function deleteTranslation (table, key) {
  return dispatch => {
    TABLE.ref(`dict/${table}/${key}`).remove()
  }
}

export function fetchTranslation (table) {
  console.log('fetchTranslation')
  return dispatch => {
    TABLE.ref(`dict/${table}`).on('value', snapshot => {
      dispatch({
        type: FETCH_WORDS,
        payload: snapshot.val()
      })
    })
  }
}