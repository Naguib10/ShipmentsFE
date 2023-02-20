import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmDel(props) {
    const [show, setShow] = useState(false);
    //comment

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function removeShipment() {
        props.remove(props.id);
        handleClose();
    }

    return (
        <>
            <Button variant="outline-danger btn-sm" onClick={handleShow}>
                Del
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Are you sure you want to delete shipment {props.orderNo}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={removeShipment}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmDel;