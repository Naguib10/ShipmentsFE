import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import axios from 'axios';

function App() {

  const [shipments, setShipments] = useState([]);

  async function fetchData() {
    try {
      //const response = await axios.get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0"); //Online
      const response = await axios.get("shipments.js"); //Offline
      setShipments(response.data);

    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  function removeShipment(removedOrderNo) {
    // setShipments((prev) => prev.filter((shipment) => shipment.orderNo !== removedOrderNo));
    // console.log(shipments);

    setShipments((prev) => {
      const tmp = prev.filter((shipment) => shipment.orderNo !== removedOrderNo);
      console.log(tmp);
      return tmp;
    });


    // let tmpArray = [...shipments];
    // tmpArray.splice(shipmentId, 1);
    // setShipments(tmpArray);
    // console.log(tmpArray);
    //console.log(removedOrderNo);
  }

  return (
    <div className="App">
      <Table shipments={shipments} remove={removeShipment} />
    </div>
  );
}

export default App;
