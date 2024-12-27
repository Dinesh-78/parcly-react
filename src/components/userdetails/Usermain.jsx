import React from "react";
import SenderAddress from "./SenderAddress";
import "./Usermain.css"; // Import the CSS file
import Productdetails from "./productdetails";

const Usermain = () => {
  return (
    <div className="usermain-container">
      <div className="usermain-header">
        <p>Finding a Delivery Man</p>
      </div>
      <SenderAddress />
      <Productdetails />
    </div>
  );
};

export default Usermain;
