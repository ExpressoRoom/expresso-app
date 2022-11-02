import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import io from 'socket.io-client';

const socket = io('localhost:8000');

export default function Home() {
  return (
    <div className="border-2 border-red-600">
      <h1>
        Welcome to Next
      </h1>
    </div>
  )
}
