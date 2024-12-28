import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Productdetails = () => {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [weight, setWeight] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Product Name: ${productName}, Category: ${category}, Weight: ${weight} kg`);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Product Details
      </Typography>

      <TextField
        label="Product Name"
        variant="outlined"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        fullWidth
      />

     
        <InputLabel id="product-category-label">Product Category</InputLabel>
        <Select
          labelId="product-category-label"
          id="product-category"
          value={category}
          onChange={handleCategoryChange}
          label="Product Category" 
        >
          <MenuItem value="Keys">Keys</MenuItem>
          <MenuItem value="Documents">Documents</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
     

      <TextField
        label="Weight (kg)"
        variant="outlined"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        fullWidth
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ alignSelf: 'center', marginTop: 2 }}
      >
        Find Driver
      </Button>
    </Box>
  );
};

export default Productdetails;
