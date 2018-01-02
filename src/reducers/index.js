import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import translateReducer from './translation.js'

const rootReducer = combineReducers({
  form: formReducer,
  translation: translateReducer
});

export default rootReducer;