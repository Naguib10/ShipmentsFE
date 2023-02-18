import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditShipment(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modifiedShipment, setModifiedShipment] = useState({
        orderNo: props.shipment.orderNo,
        date: props.shipment.date,
        customer: props.shipment.customer,
        trackingNo: props.shipment.trackingNo,
        status: props.shipment.status,
        consignee: props.shipment.consignee
    })

    function submitHandler() {

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Shipment</Modal.Title>
                </Modal.Header>


                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>ORDERNO</Form.Label>
                        <Form.Control onChange={e => setModifiedShipment(e.target.value)} value={modifiedShipment.orderNo} type="text" placeholder="Name" />
                    </Form.Group>
                </Form>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

//render(<Example />);
export default EditShipment;