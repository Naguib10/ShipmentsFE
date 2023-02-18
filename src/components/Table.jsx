import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BasicTable(props) {

    function removeShipment(id) {
        props.remove(id);
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ORDERNO</th>
                    <th>DELIVERYDATE</th>
                    <th>CUSTOMER</th>
                    <th>TRACKINGNO</th>
                    <th>STATUS</th>
                    <th>CONSIGNEE</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.shipments.map((shipment, id) => {
                    return (
                        <TableRow
                            key={id}
                            id={id}
                            orderNo={shipment.orderNo}
                            date={shipment.date}
                            customer={shipment.customer}
                            trackingNo={shipment.trackingNo}
                            status={shipment.status}
                            consignee={shipment.consignee}
                            remove={removeShipment}
                        />
                    )
                })}
            </tbody>
        </Table>
    );
}

export default BasicTable;