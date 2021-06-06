import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button, Modal } from "react-bootstrap";
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function FredCalender() {
    const [value, onChange] = useState(new Date());
    const [showCal, setshowCal] = useState(false);
    const toggelShowCal = () => {
        setshowCal(!showCal)
    };
    return (
        <div>
            <Button onClick={toggelShowCal}>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Button>
            <Modal className="d-flex justify-content-center 
            align-items-center
            " show={showCal} onHide={toggelShowCal}>
                <Modal.Header closeButton>
                    <Modal.Title >
                        Calender
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center">
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default FredCalender;