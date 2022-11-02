import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import io from 'socket.io-client';

const socket = io('localhost:8000');

export default function Home() {
  return (
    <div className="border-2 border-yellow-600 ml-1/6 h-screen">
      <h1>
        Welcome to Expresso Room
      </h1>
    </div>
  )
}
