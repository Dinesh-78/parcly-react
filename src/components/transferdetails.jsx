import React, { useEffect, useState } from "react";

const Transferdetails = () => {
  const [addr, setAddr] = useState(""); // Move useState to the top level

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
    </div>
  );
};

export default Transferdetails;
