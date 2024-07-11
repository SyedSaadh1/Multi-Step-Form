// src/components/Step3.js
import React from 'react';
import { Grid, Button, Typography } from '@mui/material';

const Step3 = ({ data, prevStep, submitForm }) => {
  const handleSubmit = () => {
    submitForm();
    alert('Form submitted successfully!'); // Replace with actual submission logic
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Typography variant="h6">Confirmation</Typography>
        <Typography variant="body1">Name: {data.name}</Typography>
        <Typography variant="body1">Email: {data.email}</Typography>
        <Typography variant="body1">Phone: {data.phone}</Typography>
        <Typography variant="body1">Address Line 1: {data.address1}</Typography>
        <Typography variant="body1">Address Line 2: {data.address2}</Typography>
        <Typography variant="body1">City: {data.city}</Typography>
        <Typography variant="body1">State: {data.state}</Typography>
        <Typography variant="body1">Zip Code: {data.zip}</Typography>
        <Grid container justifyContent="space-between">
          <Button variant="contained" color="secondary" onClick={prevStep}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Step3;
