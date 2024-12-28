import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


const Transferdetails = () => {
 
 
 
  return (
    <div>
      <Box>
       <Typography variant="h4" sx={{marginBottom:2}}>Transfer Details</Typography>
        <TextField label="Enter place" variant="outlined"  />
        <TextField label="Enter city" variant="outlined"  />
        <TextField label="Enter phone" type="number" variant="outlined"  />
      </Box>
      
    </div>
  );
};

export default Transferdetails;
