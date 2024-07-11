import React from 'react';
import MultiStepForm from './components/MultiStepForm';
import { Container, CssBaseline } from '@mui/material';

const App = () => {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <MultiStepForm />
    </Container>
  );
};

export default App;
