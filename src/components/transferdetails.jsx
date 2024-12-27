import React, { useEffect } from 'react'

const Transferdetails = () => {
    useEffect(() => {
     navigator.geolocation.getCurrentPosition(pos =>{
        const {latitude, longitude} = pos.coords;
        console.log(latitude, longitude);
     })
    }, []);

  return (
    <div>
        <h1>Send Items Enter Exact location</h1>
        <button>Location Detect</button>
    </div>
  )
}

export default Transferdetails