import React, { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const Transferdetails = () => {
  const [addr, setAddr] = useState(""); // Move useState to the top level
  const options = [
    'documents', 'keys', 'luggages'
  ];
  const defaultOption = options[0];
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          console.log("Latitude:", latitude, "Longitude:", longitude);

          // Fetch address using Nominatim API
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              if (data && data.address) {
                setAddr(data.display_name || "Address not found"); // Use `display_name` for full address
              } else {
                setAddr("Unable to fetch address");
              }
            })
            .catch((error) => {
              console.error("Error fetching address:", error);
              setAddr("Error retrieving address");
            });
        },
        (error) => {
          console.error("Error getting location:", error.message);
          setAddr("Error detecting location");
        }
      );
    } else {
      setAddr("Geolocation not supported by this browser");
    }
  }, []);

  return (
    <div>
      <h1>Send Items - Enter Exact Location</h1>
      <button onClick={() => window.location.reload()}>Location Detect</button>
      <p>Detected Address: {addr || "Detecting location..."}</p>
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
