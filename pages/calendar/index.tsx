import React from 'react';
import CalendarComponent from '../../components/Calendar'

export default function Home() {
  return (
    <div className="absolute right-0 w-5/6 border-blue-400 border-2 p-8 bg-slate-800">
      <CalendarComponent />
    </div>
  )
}