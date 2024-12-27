import React, { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Transferdetails = () => {
  // Move useState to the top level
  const options = [
    'documents', 'keys', 'luggages'
  ];
  const defaultOption = options[0];
 
  return (
    <div>
      <h1>Send Items - Enter Exact Location</h1>
      
      <button onClick={() => window.location.reload()}>Location Detect</button>
      
      <p>Is this location correct or wrong</p>
      <button>Submit</button>
      {/* <input type="text" placeholder="select category" /> */}
      <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
      <input type="text" placeholder="product name" />
      <input type="text" placeholder="Weight" />
      <button>Find a Driver</button>
      
    </div>
  );
};

export default Transferdetails;
