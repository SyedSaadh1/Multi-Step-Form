# Multi-Step Form with React

This project implements a responsive multi-step form with React.js, focusing on data validation, error handling, navigation controls, and persistence using local storage.

## Objective

The objective of this project is to create a user-friendly multi-step form that allows users to enter their personal information, address details, review their entered data, and submit it. Key features include:

- Three steps:
  1. Personal Information (Name, Email, Phone)
  2. Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
  3. Confirmation (Review entered data)
- Tabbed navigation between steps
- Client-side validation for form fields
- Persistence of form data using local storage
- Responsive design for desktop, tablet, and mobile screens

## Technologies Used

- React.js
- Material-UI for styling and components
- JavaScript (ES6+)
- HTML/CSS

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd multi-step-form-react
Install dependencies:

```bash
npm install
Run the application:

```bash
npm start
The application will start running locally on http://localhost:3000.

Usage
Navigate through the form using the next and back buttons.
Fill out all required fields and validate inputs as per form requirements.
Data will be saved locally, allowing you to revisit and continue from where you left off.
Structure
The project structure is organized into components responsible for each form step:

Step1.js: Personal Information form fields.
Step2.js: Address Information form fields.
Step3.js: Confirmation and review of entered data.
Each component manages its state using React hooks (useState, useEffect) and handles user interactions (input changes, navigation between steps) accordingly.

Implementation Notes
Validation: Implemented client-side validation ensures all fields are filled correctly before proceeding to the next step. Errors are displayed and fields are highlighted to guide the user.

Local Storage: Form data is persisted to local storage, enabling users to revisit the form and resume from where they left off.

Responsive Design: Material-UI components ensure the form is responsive and adapts to different screen sizes and devices.

Future Enhancements
API Integration: Implement backend integration to store form data persistently.
Enhanced UX: Add animations/transitions between form steps for a smoother user experience.
Unit Testing: Write unit tests to validate form components and validation functions.

Author
Syed Saadh

Acknowledgements
This project was inspired by [Challenge Task].

License
This project is licensed under the MIT License - see the LICENSE file for details.
