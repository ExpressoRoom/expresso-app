import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CalendarComponent from '../../components/Calendar';

export default function CalendarPage() {
  return (
    <div className="border-2 border-yellow-600 flex items-center justify-center text-3xl ml-1/6 h-screen">
      <h1 className="text-center">
        <CalendarComponent />
      </h1>
    </div>
  )
}