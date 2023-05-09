import React, {useState} from "react";
import Modal from "react-modal";
import DateTime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

function AddEventModal({isOpen, onClose, onEventAdded}) {
    const [clientID, setClient] = useState(0);
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (e) => {
        e.preventDefault();

        onEventAdded({
            extendedProps: {
                clientID,
            },
            title,
            start,
            end
        })
        onClose();
    }

    return (
        <Modal ariaHideApp={false} isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Add a title</label>
                    <br/>
                <input placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Client Number</label>
                    <br/>
                    <input placeholder="clientID" value={clientID} onChange={e => setClient(parseInt(e.target.value))}/>
                </div>
                <div>
                    <label>Start Date</label>
                    <DateTime value={start} onChange={date => setStart(date)} />
                </div>

                <div>
                    <label>End Date</label>
                    <DateTime value={end} onChange={date => setEnd(date)} />
                </div>

                <button>Add event</button>

            </form>
        </Modal>
    )
}

export default AddEventModal;