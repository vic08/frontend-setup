// This is the Link API
import * as React from 'react'
import Link from 'next/link'
import {nextConnect} from "../app/reduxNext"
import {GlobalStore} from "../app/reducers"
import {requestCoinmarketData} from '../app/actions/'
import {Header} from 'screencloud-ui-components'

export type Props = {
  cryptoData: GlobalStore['cryptoData'],
  dispatch: (any) => any //todo: define types/interfaces for redux
}

type State = {
  something: number
}

class Index extends React.PureComponent<Props, State> {
  componentDidMount() {
    this.props.dispatch(requestCoinmarketData())
  }

  constructor(props) {
    super(props)

    this.state = {
      something: 0
    }
  }

  triggerRerender = () => {
    this.setState({something: Math.random()})
  }

  render() {
    return <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Header title={'blaaa'} subtitle={'wateva'}/>
      <p>Hello Next.js</p>
      {!!this.props.cryptoData.active_assets ?
        <p>Active assets: {this.props.cryptoData.active_assets.toString()}<br/>
          Bitcoin dominance: {this.props.cryptoData.bitcoin_percentage_of_market_cap}</p>:
        <p>Loading...</p>
      }
      <button onClick={this.triggerRerender}>render</button>
      <h2>{this.state.something}</h2>
      <div className={'styled'}>vah</div>
      <style jsx>{`
        .styled {
          width: 200px;˚
          height: 200px;
          background: url('${require('./logo.svg')}')
        }
      `}</style>
    </div>
  }
}

export default nextConnect((state: GlobalStore) => ({cryptoData: state.cryptoData}))(Index)