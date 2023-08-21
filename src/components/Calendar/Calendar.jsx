import React, { useState } from 'react'
import Header from '../Header/Header'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from '@fullcalendar/react';


const events = [
    {
        title: "All-day event",
        date: "2023-08-14",
    },
    {
        title: "Timed event",
        date: "2023-08-14",
    },
]
const calendarStyles = {
    margin: '30px 0 0 50px'
}

const Calendar = () => {
    const [currentEvents, setCurrentEvents] = useState([{
        title: "All-day event",
        date: "2023-08-14",
    },
    {
        title: "Timed event",
        date: "2023-08-14",
    },]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        if (title) {
            calendarApi.addEvent({
                title: title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };
    return (

        <>
            <Header title="CREATE USER" text="Create a New User Profile" />
            <div style={calendarStyles}>
                <FullCalendar
                    height={'75vh'}
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                    }}
                    initialView='dayGridMonth'
                    weekends={false}
                    events={events}
                    editable={true}
                    selectable={true}
                    eventClick={handleEventClick}
                    select={handleDateClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                />
            </div>
        </>
    )
}

export default Calendar