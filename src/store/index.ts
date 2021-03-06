import { combineReducers } from 'redux'

import { userReducer } from './reducers/user'

export const rootReducer = combineReducers({
  userReducer
})

export type AppState = ReturnType<typeof rootReducer>
