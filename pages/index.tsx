import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import io from 'socket.io-client';

const socket = io('localhost:8000');

export default function Home() {
  return (
    <div className="border-2 border-yellow-600 flex flex-col ml-1/6 h-screen">
      <div className="border-2 border-blue-500 h-1/4">
        <h1 className="text-left pl-12 py-20 text-3xl">
          Hello *Username*
        </h1>
      </div>
      <div className="border-2 border-green-500 flex w-full h-4/6">
        <div className="border-2 border-blue-500 flex flex-col w-1/2 h-full">
          left
          <div className="border-2 border-blue-200 p-2 m-4 h-2/5">
            social feed
          </div>
          <div className="border-2 border-blue-200 p-2 m-4 h-3/5">
            current projects
          </div>
        </div>
        <div className="border-2 border-red-500 flex flex-col w-1/2 h-full">
          right
          <div className="border-2 border-blue-200 p-2 m-4 h-3/5">
            Kat-lendar
          </div>
          <div className="border-2 border-blue-200 p-2 m-4 h-1/4">
            Challenges
          </div>
        </div>
      </div>
    </div>
  )
}
