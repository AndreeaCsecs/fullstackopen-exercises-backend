# Phonebook Backend Application

This repository contains the backend code for the Phonebook application.

## Deployed Application

The backend application has been deployed to Render.com.

You can access the deployed backend application [here]([https://fullstackopen-exercises-backend-yh8t.onrender.com/)].

## About

This backend application provides API endpoints for managing phonebook entries. It is built using Node.js, Express, and other libraries.

### Exercise Completion

- **Exercise 3.9 Phonebook Backend Step 9**: Implemented backend functionality to work with the phonebook frontend from previous exercises. Made necessary changes to frontend URLs to communicate with the backend.
  
- **Exercise 3.10 Phonebook Backend Step 10**: Deployed the backend to the internet using Render.com. Tested the deployed backend with browser and REST clients like Postman to ensure functionality.
  
- **Exercise 3.11 Full Stack Phonebook**: Generated a production build of the frontend and added it to the internet application using the method introduced in the course. Ensured that the frontend still works locally in development mode.

## Technologies Used

- Node.js
- Express
- Axios (for handling HTTP requests)
- Morgan (for logging)
- Cors (for enabling CORS in Express)

## Instructions

To run this application locally:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the server.
5. The server will start running at `http://localhost:3001`.

## API Endpoints

- `GET /api/persons`: Get all phonebook entries.
- `POST /api/persons`: Add a new phonebook entry.
- `GET /api/persons/:id`: Get a phonebook entry by ID.
- `DELETE /api/persons/:id`: Delete a phonebook entry by ID.

Feel free to contact me if you have any questions or suggestions!
