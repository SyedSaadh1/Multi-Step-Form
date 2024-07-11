import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, value, onChange, type = 'text', error, helperText }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
      type={type}
      error={!!error}
      helperText={helperText}
    />
  );
};

export default InputField;
