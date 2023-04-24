import { useState } from "react";
// Third-party libraries
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Form = () => {
  // To track the state of functional components
  const [location, setLocation] = useState("");
  const [droplocation, setDroplocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [add, setAdd] = useState("");
  const [show, setShow] = useState(false);

  // Functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
    style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2021/09/09/02/25/taxi-6609297_960_720.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "550px",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}>
    <div className="create">
      <h2>Book a Cab:</h2>

      {/* Form  */}
      <form onSubmit={handleShow}>
        <label>Pickup Location:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Dropoff Location:</label>
        <input
          type="text"
          required
          value={droplocation}
          onChange={(e) => setDroplocation(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Time:</label>
        <input
          type="time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label>Additional requirements:</label>
        <textarea
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        ></textarea>
        <button>Submit</button>

        {/* Modal to display user's inquiry details */}
        <Modal show={show} onHide={handleClose} id="myModal">
        <Modal.Header closeButton>
          <Modal.Title>Thanks for contacting!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Pickup Location:  {location}</p>
        <p>Dropoff Location: {droplocation} </p>
        <p>Date: {date} </p>
        <p>Time: {time} </p>
        <p>Requirements: {add} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      </form>
    </div>
    </div>
  );
};

export default Form;
