import nextConnectRedux from 'next-connect-redux' //todo: add type declarations for library
import { createStore } from 'redux'
import reducer, {GlobalStore} from './reducers/'

export const initStore = (initialState: GlobalStore) => {
  return createStore(reducer, initialState)
}

export const nextConnect = nextConnectRedux(initStore)