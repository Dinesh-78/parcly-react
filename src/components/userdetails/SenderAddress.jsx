import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import "./Senderaddress.css"; // Import the CSS file

const SenderAddress = () => {
  const [addr, setAddr] = useState("");

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
    <div className="sender-container">
      <div className="sender-card">
        <div className="sender-icon">
          <FaLocationArrow />
        </div>
        <p className="sender-text">{addr || "Detecting location..."}</p>
        <button type="button" className="sender-button">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default SenderAddress;
