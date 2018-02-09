import {Props} from '../../pages'
import {LOAD_COINMARKET_DATA_SUCCESS} from '../constants/actionTypes'

export function requestCoinmarketData() {
  return async (dispatch, getState) => {
    let response = await fetch('https://api.coinmarketcap.com/v1/global/')
    let data = await response.json() as Props['cryptoData']

    dispatch({
      type: LOAD_COINMARKET_DATA_SUCCESS,
      cryptoData: data
    })
  }
}