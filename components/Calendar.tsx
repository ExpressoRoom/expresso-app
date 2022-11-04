import { Calendar, render } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const CalendarComponent = ({calendarEl}: any) => {
  let calendar = new Calendar(calendarEl, {
    plugins: [ googleCalendarPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    googleCalendarApiKey: process.env.CalendarAPIKey,
    events: {
      googleCalendarId: 'abcd1234@group.calendar.google.com'
    }
  });

  render(
    <div>

    </div>
  )
}

export default CalendarComponent;
