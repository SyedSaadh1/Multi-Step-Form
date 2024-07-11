// src/components/MultiStepForm.js
import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (input) => (e) => {
    const newFormData = { ...formData, [input]: e.target.value };
    setFormData(newFormData);
    localStorage.setItem('formData', JSON.stringify(newFormData));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    // Handle form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
    localStorage.removeItem('formData'); // Clear localStorage after submission
  };

  switch (step) {
    case 1:
      return <Step1 data={formData} handleChange={handleChange} nextStep={nextStep} />;
    case 2:
      return <Step2 data={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 data={formData} prevStep={prevStep} submitForm={submitForm} />;
    default:
      return <Step1 data={formData} handleChange={handleChange} nextStep={nextStep} />;
  }
};

export default MultiStepForm;
