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
    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);


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
            serviceOffer: event.extendedProps.serviceOffer,
            title: event.title,
            start: moment(event.rdvDate).toDate(),
            end: moment(event.rdvHeure).toDate()
            
        });
    };

    async function handleEventAdd(data) {
        try {
            const eventData = {
                clientID: data.extendedProps.clientID, // Access clientID from extendedProps
                serviceOffer: data.extendedProps.serviceOffer,
                rdvCom: data.title,
                rdvDate: moment(data.start).format('YYYY-MM-DD'), // Format start datetime
                rdvHeure: moment(data.start).format('HH:mm:ss'), // Format end datetime
              };
            console.log(eventData);
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

            await handleDatesSet();

        } catch (error) {
            console.error("Error in handleEventAdd:", error);
        }
    }

    async function handleDatesSet() {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/adminPanel/get-events`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('events:', data);

                if (Array.isArray(data)) {
                    const parsedEvents = data.map((event) => ({
                        rdvID: event.rdvID,
                        clientID: event.clientID,
                        title: event.rdvCom,
                        start: moment(`${event.rdvDate} ${event.rdvHeure}`).toDate(),
                        end: null,
                        serviceOffer: event.serviceOffer,
                        clientNom: event.clientNom,
                    }));
                    setEvents(parsedEvents);
                    console.log('parsedEvents:', parsedEvents);
                } else {
                    console.error("Error: Invalid events data format.");
                }
            } else {
                console.error("Error getting events:", response.statusText);
            }
        } catch (error) {
            console.error("Error in handleDatesSet:", error);
        }
    }

    async function handleDeleteEvent() {

        if (selectedEvent) {
            try {
                const rdvID = selectedEvent.extendedProps.rdvID;

                console.log("Selected Event:", rdvID); // Add this line

                // Make a DELETE request to the backend API to delete the event
                const response = await fetch(`${process.env.REACT_APP_URL}/adminPanel/delete-event/${rdvID}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    // Event deleted successfully
                    console.log("Event deleted successfully");

                    const updatedEvents = events.filter(event => event.rdvID !== rdvID);
                    setEvents(updatedEvents);

                    // Close the modal
                    handleCloseModal();

                    // Refresh the calendar to update the events
                    calendarRef.current.getApi().refetchEvents();
                } else {
                    const error = await response.json();
                    console.error("Error deleting event:", error);
                }
            } catch (error) {
                console.error("Error deleting event:", error);
            }
        }

        setShowConfirmDeleteModal(false);  // close the delete confirmation modal

    };

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
                        <Button style={{ backgroundColor: 'red', borderColor: 'red' }} onClick={() => setShowConfirmDeleteModal(true)}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
            <Modal show={showConfirmDeleteModal} onHide={() => setShowConfirmDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button style={{ backgroundColor: 'red', borderColor: 'red' }} onClick={handleDeleteEvent}>Yes</Button>
                    <Button variant="secondary" onClick={() => setShowConfirmDeleteModal(false)}>No</Button>
                </Modal.Body>
            </Modal>
        </section>
    );
}

export default Calendar;
