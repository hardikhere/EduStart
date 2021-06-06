import React from 'react'
import { Modal,Button } from "react-bootstrap"
const ConfirmDeleteModal = (props) => {
    return (
        <Modal style={{ marginTop: "4.3%" }} show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you Sure you want to delete this {props.name}?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="danger"
                onClick = {props.onDelete}
                  >Delete
                </Button>
            </Modal.Footer>

        </Modal>
    )
}

export default ConfirmDeleteModal
