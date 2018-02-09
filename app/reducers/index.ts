import { combineReducers} from "redux";
import {LOAD_COINMARKET_DATA_SUCCESS} from '../constants/actionTypes'

//todo: Global store type will consist of sub reducer store types
export type GlobalStore = {
  something: string,
  shmamfing: string,
  cryptoData: {
    "total_market_cap_usd": number,
    "total_24h_volume_usd": number,
    "bitcoin_percentage_of_market_cap": number,
    "active_currencies": number,
    "active_assets": number,
    "active_markets": number,
    "last_updated": number
  }

}

//todo: define interface for actions

export default combineReducers({

  something: (state = 'something', action) => state,

  shmamfing: (state = 'shmamfing', action) => state,

  cryptoData: (state = {}, action) => {
    if (action.type === LOAD_COINMARKET_DATA_SUCCESS) {
      return {...state, ...action.cryptoData}
    }
    return state
  }

})