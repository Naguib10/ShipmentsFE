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

      //Adding ids to shipments to be able to delete after editing a shipment
      response.data.forEach((item, i) => {
        item._id = i + 1;
      });

      setShipments(response.data);

    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  function removeShipment(removedShipment) {
    setShipments((prev) => prev.filter((shipment) => shipment._id !== removedShipment));
  }

  return (
    <div className="App">
      <Table shipments={shipments} remove={removeShipment} />
    </div>
  );
}

export default App;
