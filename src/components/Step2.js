import React, { useState } from 'react';
import { Grid, Button, TextField, Typography } from '@mui/material';

const Step2 = ({ data, handleChange, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const inputFields = [
    {
      label: 'Address Line 1',
      name: 'address1',
      error: errors.address1,
      helperText: errors.address1 && errors.address1,
    },
    {
      label: 'Address Line 2',
      name: 'address2',
      error: errors.address2,
      helperText: errors.address2 && errors.address2,
    },
    {
      label: 'City',
      name: 'city',
      error: errors.city,
      helperText: errors.city && errors.city,
    },
    {
      label: 'State',
      name: 'state',
      error: errors.state,
      helperText: errors.state && errors.state,
    },
    {
      label: 'Zip Code',
      name: 'zip',
      error: errors.zip,
      helperText: errors.zip && errors.zip,
    },
  ];

  const validate = () => {
    let valid = true;
    const newErrors = {};

    inputFields.forEach((field) => {
      if (!data[field.name].trim()) {
        newErrors[field.name] = `${field.label} is required`;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  const handleBack = () => {
    prevStep();
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Typography variant="h6">Address Information</Typography>
        {inputFields.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            value={data[field.name]}
            onChange={handleChange(field.name)}
            error={!!field.error}
            helperText={field.helperText}
            fullWidth
            margin="normal"
          />
        ))}
        <Grid container justifyContent="space-between">
          <Button variant="contained" color="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Step2;
