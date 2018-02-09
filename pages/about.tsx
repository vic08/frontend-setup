// This is the Link API
import * as React from 'react'
import {nextConnect} from "../app/reduxNext"
import {GlobalStore} from "../app/reducers"

export type Props = {
  cryptoData: GlobalStore['cryptoData'],
  dispatch: (any) => any //todo: define types/interfaces for redux
}

type State = {
  something: number
}

class About extends React.PureComponent<Props, State> {

  render() {
    return (
      <div>
        <p>This is the about page</p>
        {!!this.props.cryptoData.active_assets ?
          <p>Active assets: {this.props.cryptoData.active_assets.toString()}<br/>
            Bitcoin dominance: {this.props.cryptoData.bitcoin_percentage_of_market_cap}</p>:
          <p>Loading...</p>
        }
      </div>
    )
  }
}

export default nextConnect((state: GlobalStore) => ({cryptoData: state.cryptoData}))(About)