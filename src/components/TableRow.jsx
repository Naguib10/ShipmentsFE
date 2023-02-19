import React, { useState } from 'react';
import EditShipment from "./EditShipment";
import Button from 'react-bootstrap/Button';

function TableRow(props) {

    const [shipment, setShipment] = useState({
        orderNo: props.orderNo,
        date: props.date,
        customer: props.customer,
        trackingNo: props.trackingNo,
        status: props.status,
        consignee: props.consignee,
        _id: props._id
    })

    function updateDetails(updatedShipment) {
        setShipment(updatedShipment);
    }

    function removeShipment() {
        props.remove(shipment._id);
    }

    return (
        <>
            <tr>
                <td>{shipment.orderNo}</td>
                <td>{shipment.date}</td>
                <td>{shipment.customer}</td>
                <td>{shipment.trackingNo}</td>
                <td>{shipment.status}</td>
                <td>{shipment.consignee}</td>
                <td><EditShipment shipment={shipment} update={updateDetails} /></td>
                <td><Button variant="danger" onClick={removeShipment}>
                    Del
                </Button></td>
            </tr>
        </>
    )
}

export default TableRow;
