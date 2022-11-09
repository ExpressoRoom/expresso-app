import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import io from 'socket.io-client';

export const socket = io('localhost:8000', {
  autoConnect: false
});


export default function Home() {
  return (
    <div className="border-2 border-yellow-600 flex items-center justify-center text-3xl ml-1/6 h-screen">
      <h1 className="text-center">
        Welcome to Expresso Room
      </h1>
    </div>
  )
}
