# Phonebook Backend Application

This repository contains the backend code for the Phonebook application, which is part of the University of Helsinki's Full Stack Open course (Part 3). You can find more information and start the course [here](https://fullstackopen.com/).

## Deployed Application

The backend application has been deployed to Render.com.

You can access the deployed backend application [here](https://fullstackopen-exercises-backend-yh8t.onrender.com/).

## About

This backend application provides API endpoints for managing phonebook entries. It is built using Node.js, Express, and other libraries.

### Exercise Completion

#### Exercises 3.15 - 3.18

- **3.15:** Implemented functionality to delete phonebook entries, reflecting changes in the database.
- **3.16:** Moved error handling to a new error handler middleware.
- **3.17:** Modified the backend to support updating phone numbers of existing entries.
- **3.18:** Updated handling of API routes to interact with the database.

#### Exercises 3.19 - 3.21

- **3.19:** Expanded name validation to require at least three characters in the database. Implemented frontend error handling.
- **3.20:** Added validation for phone numbers. Invalid numbers return appropriate error messages.
- **3.21:** Deployed the backend to Render.com, ensuring functionality on the cloud service.

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
