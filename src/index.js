import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers';
import 'milligram/dist/milligram.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(promise, ReduxThunk)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
