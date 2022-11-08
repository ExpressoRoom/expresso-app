import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import listPlugin from '@fullcalendar/list';
import React, { useState, useEffect, useRef } from "react";

const Calendar = ({ userId }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    //api pull from db
  }, []);

  const handleClickDay = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: eventNamePrompt + Date.now(),
        },
      ]);
    }
  };

  return (
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin, listPlugin, bootstrap5Plugin]}
        initialView="dayGridMonth"
        themeSystem="standard"
        height={1100}
        headerToolbar={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          center: 'title',
          right: 'prevYear,prev,next,nextYear'
        }}
        footerToolbar={{
          left: '',
          center: '',
          right: 'prev,next'
        }}
        initialEvents={[
          { title: 'nice event', start: new Date() }
        ]}
        events={events}
        select={handleClickDay}
        editable={true}
        eventStartEditable={true}
        selectable={true}
        eventLimit={true}
        selectHelper={true}
      />
  );
};

export default Calendar;