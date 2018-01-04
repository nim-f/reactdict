import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import translateReducer from './translation.js'
import recentReducer from './recent_reducer.js'

const rootReducer = combineReducers({
  form: formReducer,
  translation: translateReducer,
  recent: recentReducer
});

export default rootReducer;