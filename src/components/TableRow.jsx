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

    function showDetails() {

    }

    return (
        <>
            <tr onClick={showDetails}>
                <td>{shipment.orderNo}</td>
                <td>{shipment.date}</td>
                <td>{shipment.customer}</td>
                <td>{shipment.trackingNo}</td>
                <td>{shipment.status}</td>
                <td>{shipment.consignee}</td>
                <td><button>Del</button></td>
                <td><EditShipment shipment={shipment} /></td>
            </tr>
        </>
    )
}

export default TableRow;
