import nextConnectRedux from 'next-connect-redux' //todo: add type declarations for library
import { createStore, applyMiddleware } from 'redux'
import reducer, {GlobalStore} from './reducers/'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

//todo: disable logger in production build
export const initStore = (initialState: GlobalStore) => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      thunk,
      createLogger({
        diff: true,
        collapsed: true,
        logErrors: false
      })
    )
  )
}

export const nextConnect = nextConnectRedux(initStore)