import { useState } from 'react';
import EditShipment from "./EditShipment";

function TableRow(props) {


    const [shipment, setShipment] = useState({
        orderNo: props.orderNo,
        date: props.date,
        customer: props.customer,
        trackingNo: props.trackingNo,
        status: props.status,
        consignee: props.consignee
    })

    function updateDetails(updatedShipment) {
        setShipment(updatedShipment);
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
                <td><button>Del</button></td>
                <td><EditShipment shipment={shipment} update={updateDetails} /></td>
            </tr>
        </>
    )
}

export default TableRow;
