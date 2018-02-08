import { combineReducers} from "redux";

//todo: Global store type will consist of sub reducer store types
export type GlobalStore = {
  something: string,
  shmamfing: string
}

//todo: define interface for actions
function reducer(state: any, action: any) : GlobalStore {
  return <GlobalStore>combineReducers({

    something: (state = 'something', action) => state,

    shmamfing: (state = 'shmamfing', action) => state

  })(state, action)
}

export default reducer