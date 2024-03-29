import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import { saveToLocalStorage, loadFromLocalStorage } from './utils/store'

import { rootReducer } from './store'

import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedState = loadFromLocalStorage()

const store = createStore(rootReducer, persistedState, composeEnhancers())

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
