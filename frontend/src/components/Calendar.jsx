import React, {useEffect, useRef, useState} from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction";
import AddEventModal from "./AddEventModal";
import moment from "moment";
import 'moment/locale/fr'; // Import the French locale
import frLocale from '@fullcalendar/core/locales/fr';
import { Modal, Button } from "react-bootstrap";

moment.locale('fr');

function Calendar() {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([])
    const calendarRef = useRef(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showModal, setShowModal] = useState(false);

    function handleEventClick(eventClickInfo) {
        const event = eventClickInfo.event;
        setSelectedEvent(event);
        setShowModal(true);
    }
    
    function handleCloseModal() {
      setShowModal(false);
    }

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            clientID: event.extendedProps.clientID,
            title: event.rdvCom,
            start: moment(event.rdvDate).toDate(),
            end: moment(event.rdvHeure).toDate()
            
        });
    };

    async function handleEventAdd(data) {
        try {
            const eventData = {
                clientID: data.extendedProps.clientID, // Access clientID from extendedProps
                rdvCom: data.title,
                rdvDate: moment(data.start).format('YYYY-MM-DD'), // Format start datetime
                rdvHeure: moment(data.start).format('HH:mm:ss') // Format end datetime
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
    
    async function handleDatesSet() {
        try {
            //const start = moment(data.start).toISOString();
            //const end = moment(data.end).toISOString();
            const response = await fetch(`${process.env.REACT_APP_URL}/adminPanel/get-events`, { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                },
            });
    
            if (response.ok) {
                const events = await response.json();
                const parsedEvents = events.result.map((event) => ({
                    clientID: event.clientID,
                    clientNom: event.clientNom,
                    title: event.rdvCom,
                    start: moment(`${event.rdvDate} ${event.rdvHeure}`).toDate(),
                    end: null
                  }));
                setEvents(parsedEvents);
                console.log(parsedEvents)
            } else {
                console.error("Error getting events:", response.statusText);
            }
        } catch (error) {
            console.error("Error in handleDatesSet:", error);
        }
    }

    useEffect(() => {
        handleDatesSet();
    }, []);

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
                        locale={frLocale} // Set the locale to French
                        ref={calendarRef}
                        events={events}
                        plugins={[ dayGridPlugin, interactionPlugin ]}
                        initialView="dayGridMonth"
                        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                        eventAdd={event => handleEventAdd(event.event)}
                        datesSet={(date) => handleDatesSet(date)}
                        eventClick={handleEventClick}
                    />
                </div>

            <AddEventModal isOpen={modalOpen}
                           onClose={() => setModalOpen(false)}
                           onEventAdded={event => onEventAdded(event)}
            />
            {selectedEvent && (
                <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'black' }}>{selectedEvent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: 'black' }}>Client: {selectedEvent.extendedProps.clientNom}</p>
                    <p style={{ color: 'black' }}>Debut: {moment(selectedEvent.start).format('dddd D MMMM YYYY, HH:mm')}</p>
                    {/* Add any other event details you want to display */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
                </Modal>
            )}
        </section>
    );
}

export default Calendar;
