import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
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
    <>
    <div className="container flex-1 justify-center" >
           <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
           <FaLocationArrow />
            <p className="text-sm font-semibold">Detected Address: {addr || "Detecting location..."}</p>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">CONTINUE</button>
           </div>
    </div>
    </>
  )
}

export default SenderAddress