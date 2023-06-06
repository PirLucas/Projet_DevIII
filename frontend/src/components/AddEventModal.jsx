import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function AddEventModal({ isOpen, onClose, onEventAdded }) {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState("");
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(null);
    const [serviceOffer, setService] = useState("");


    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/adminPanel/get-clients`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching clients");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data); // Log the response data
                const clientsArray = Object.values(data); // Convert the response object into an array
                setClients(clientsArray); // Set the clients state with the converted array
            })
            .catch((error) => console.error(error));
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const client = selectedClient
            ? clients.find((client) => client.clientID === parseInt(selectedClient))
            : null;

        onEventAdded({
            extendedProps: {
                clientID: client ? client.clientID : null,
                serviceOffer: serviceOffer, // Parse the serviceOffer value to integer if not null
            },
            title,
            rdvDate: start,
            rdvHeure: end
        });
        onClose();
    };

    return (
        <div className="container">
            <Modal
                ariaHideApp={false}
                isOpen={isOpen}
                onRequestClose={onClose}
                style={{
                    overlay: {
                        zIndex: 9999,
                    },
                }}
            >
                <form onSubmit={onSubmit} style={{ width: "500px" }}>
                    <div className="mb-3" style={{ color: "black" }}>
                        <label className="form-label">Add a title</label>
                        <input
                            className="form-control"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3" style={{ color: "black" }}>
                        <label className="form-label">Select a client</label>
                        <select
                            className="form-control"
                            value={selectedClient}
                            onChange={(e) => setSelectedClient(e.target.value)}
                        >
                            <option value="">Select a client</option>
                            {clients.map((client) => (
                                <option key={client.clientID} value={client.clientID}>
                                    {client.clientNom}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3" style={{ color: "black" }}>
                        <label className="form-label">Start Date</label>
                        <br />
                        <DatePicker
                            selected={start}
                            onChange={(date) => {
                                console.log(date);
                                setStart(date);}}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                    <div className="mb-3" style={{ color: "black" }}>
                        <label className="form-label">Service</label>
                        <br />
                        <select
                            className="form-control"
                            value={serviceOffer}
                            onChange={(e) => setService(Number(e.target.value))}
                        >
                            <option value="">Select a service</option>
                            <option value={1}>Service 1</option>
                            <option value={2}>Service 2</option>
                            <option value={3}>Service 3</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Add event
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default AddEventModal;
