import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

function BasicTable(props) {

    return (
        <Table striped hover>
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
                {props.shipments.map((shipment) => {
                    return (
                        <TableRow
                            key={shipment._id}
                            shipment={shipment}
                            remove={props.remove}
                        />
                    )
                })}
            </tbody>
        </Table>
    );
}

export default BasicTable;