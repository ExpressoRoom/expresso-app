import React from 'react';
import FullCalendar from "@fullcalendar/react";
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import CalendarComponent from '../../components/Calendar'

export default function Home() {
  return (
    <div>
      <CalendarComponent />
    </div>
  )
}