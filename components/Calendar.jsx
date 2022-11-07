import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { useRef } from "react";

const Calendar = ({  }) => {

  return (
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
        initialView="dayGridWeek"
        themeSystem="bootstrap5"
        height={700}
        editable
        selectable
      />
  );
};

export default Calendar;