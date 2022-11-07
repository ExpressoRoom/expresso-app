import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import listPlugin from '@fullcalendar/list';
import { useRef } from "react";

const Calendar = ({  }) => {

  return (
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin, listPlugin, bootstrap5Plugin]}
        initialView="dayGridMonth"
        themeSystem="standard"
        height={800}
        headerToolbar={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title',
          right: 'prevYear,prev,next,nextYear'
        }}
        footerToolbar={{
          left: 'listDay,listWeek,listMonth',
          center: 'custom1,custom2',
          right: 'prev,next'
        }}
        customButtons={{
          custom1: {
            text: 'custom 1',
            click: function() {
              alert('clicked custom button 1!');
            }
          },
          custom2: {
            text: 'custom 2',
            click: function() {
              alert('clicked custom button 2!');
            }
          }
        }}
        editable
        selectable
      />
  );
};

export default Calendar;