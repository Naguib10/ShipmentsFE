import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ModalBody } from 'react-bootstrap';

function EditShipment(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [orderNo, setOrderNo] = useState(props.shipment.orderNo);
    const [date, setDate] = useState(props.shipment.date);
    const [customer, setCustomer] = useState(props.shipment.customer);
    const [trackingNo, setTrackingNo] = useState(props.shipment.trackingNo);
    const [status, setStatus] = useState(props.shipment.status);
    const [consignee, setConsignee] = useState(props.shipment.consignee);

    function submitHandler() {
        const modifiedShipment = {
            orderNo: orderNo,
            date: date,
            customer: customer,
            trackingNo: trackingNo,
            status: status,
            consignee: consignee,
            _id: props.shipment._id
        }
        props.update(modifiedShipment);
        handleClose();
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
                <ModalBody>


                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>ORDERNO</Form.Label>
                            <Form.Control onChange={e => setOrderNo(e.target.value)} value={orderNo} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>DATE</Form.Label>
                            <Form.Control onChange={e => setDate(e.target.value)} value={date} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>CUSTOMER</Form.Label>
                            <Form.Control onChange={e => setCustomer(e.target.value)} value={customer} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>TRACKINGNO</Form.Label>
                            <Form.Control onChange={e => setTrackingNo(e.target.value)} value={trackingNo} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>STATUS</Form.Label>
                            <Form.Control onChange={e => setStatus(e.target.value)} value={status} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>CONSIGNEE</Form.Label>
                            <Form.Control onChange={e => setConsignee(e.target.value)} value={consignee} type="text" />
                        </Form.Group>
                    </Form>
                </ModalBody>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitHandler}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

//render(<Example />);
export default EditShipment;