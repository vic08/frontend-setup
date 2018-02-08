// This is the Link API
import * as React from 'react'
import Link from 'next/link'
import {nextConnect} from "../app/reduxNext"
import {GlobalStore} from "../app/reducers"

export type Props = {
  something: GlobalStore['something'],
  shmamfing: GlobalStore['shmamfing']
}

const Index = (props: Props) => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
    <p>{props.something} {props.shmamfing}</p>
  </div>
)

export default nextConnect((state: GlobalStore) => ({...state}))(Index)