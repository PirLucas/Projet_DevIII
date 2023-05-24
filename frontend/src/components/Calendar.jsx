import React, {useEffect, useRef, useState} from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import AddEventModal from "./AddEventModal";
import moment from "moment";



function Calendar() {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([])
    const calendarRef = useRef(null);

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            clientID: event.extendedProps.clientID,
            title: event.title,
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate()
            
        });
    };

    async function handleEventAdd(data) {
        try {
            const eventData = {
                clientID: data.extendedProps.clientID, // Access clientID from extendedProps
                title: data.title,
                start: moment(data.start).format('YYYY-MM-DD HH:mm:ss'), // Format start datetime
                end: moment(data.end).format('YYYY-MM-DD HH:mm:ss'), // Format end datetime
              };
            const response = await fetch(`${process.env.REACT_APP_URL}/adminPanel/create-event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData),
            });
            console.log(JSON.stringify(eventData));
            if (!response.ok) {
                const error = await response.json();
                console.error("Error adding event:", error);
            }
        } catch (error) {
            console.error("Error in handleEventAdd:", error);
        }
    }
    
    async function handleDatesSet(data) {
        try {
            const start = moment(data.start).toISOString();
            const end = moment(data.end).toISOString();
            const response = await fetch(`${process.env.REACT_APP_URL}/adminPanel/get-events?rdvStart=${start}&rdvEnd=${end}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                }
            });
    
            if (response.ok) {
                const events = await response.json();
                const parsedEvents = events.result.map((event) => ({
                    clientID: event.clientID,
                    title: event.title,
                    start: moment(event.rdvStart).toDate(),
                    end: moment(event.rdvEnd).toDate()
                  }));
                setEvents(parsedEvents);
            } else {
                console.error("Error getting events:", response.statusText);
            }
        } catch (error) {
            console.error("Error in handleDatesSet:", error);
        }
    }



    return (
        <section>
            <div style={{margin: "15px"}}>
            <button onClick={() => setModalOpen(true)}>Add Event</button>
            </div>
                <div style={{position: "relative", zIndex: 0, color: "black"}}>
                    <FullCalendar
                        headerToolbar={{
                            end: "dayGridMonth dayGridWeek dayGridDay today prev next",
                        }}
                        ref={calendarRef}
                        events={events}
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                        eventAdd={event => handleEventAdd(event.event)}
                        datesSet={(date) => handleDatesSet(date)}
                    />
                </div>

            <AddEventModal isOpen={modalOpen}
                           onClose={() => setModalOpen(false)}
                           onEventAdded={event => onEventAdded(event)}
            />

        </section>
    )
}

export default Calendar;