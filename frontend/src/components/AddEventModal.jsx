import React, {useState} from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        <div className="container">
        <Modal ariaHideApp={false} isOpen={isOpen} onRequestClose={onClose}
        style={{
            overlay: {
              zIndex: 9999,
            }
          }}>
            <form onSubmit={onSubmit} style={{width: "500px"}}>
                <div className="mb-3" style={{color: "black"}}>
                    <label className="form-label">Add a title</label>
                    <input className="form-control" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3" style={{color: "black"}}>
                    <label className="form-label">Client Number</label>
                    <input className="form-control" placeholder="clientID" value={clientID} onChange={e => setClient(parseInt(e.target.value))}/>
                </div>
                <div className="mb-3" style={{color: "black"}}>
                    <label className="form-label">Start Date</label>
                    <br />
                    <DatePicker selected={start} onChange={date => setStart(date)} 
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        />
                </div>

                <div className="mb-3"style={{color: "black"}}>
                    <label className="form-label">End Date</label>
                    <br />
                    <DatePicker selected={end} onChange={date => setEnd(date)} 
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add event</button>

            </form>
        </Modal>
        </div>
    )
}

export default AddEventModal;