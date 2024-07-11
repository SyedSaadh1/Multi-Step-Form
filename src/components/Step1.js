import React, { useState } from 'react';
import { Grid, Button, TextField, Typography } from '@mui/material';

const Step1 = ({ data, handleChange, nextStep }) => {
  const [errors, setErrors] = useState({});

  const inputFields = [
    {
      label: 'Name',
      name: 'name',
      error: errors.name,
      helperText: errors.name && errors.name,
    },
    {
      label: 'Email',
      name: 'email',
      error: errors.email,
      helperText: errors.email && errors.email,
    },
    {
      label: 'Phone',
      name: 'phone',
      error: errors.phone,
      helperText: errors.phone && errors.phone,
    },
  ];

  const validate = () => {
    let valid = true;
    const newErrors = {};

    inputFields.forEach((field) => {
      if (!data[field.name].trim()) {
        newErrors[field.name] = `${field.label} is required`;
        valid = false;
      } else if (field.name === 'email' && !/\S+@\S+\.\S+/.test(data.email)) {
        newErrors.email = 'Email is invalid';
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

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Typography variant="h6">Personal Information</Typography>
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
        <Grid container justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Step1;
