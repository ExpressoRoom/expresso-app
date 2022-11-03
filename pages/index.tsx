import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import io from 'socket.io-client';

const socket = io('localhost:8000');

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="border-2 border-sky-500">
        Icon bar
      </div>
      <div>
        homepage container
        <h1>
          Hi *username*
        </h1>
        <div>
          left column
          <div>
            Social Feed box
          </div>
          <div>
            current Projects box
          </div>
        </div>
        <div>
          right column
          <div>
            Calendar box
          </div>
          <div>
            technical question box
          </div>
          <div>
            call to action box
          </div>
        </div>
      </div>

    </div>
  )
}
