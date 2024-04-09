# Fullstack Open - Backend Exercises

This repository contains the backend exercises completed as part of the Fullstack Open course.

## Installation

1. Install Node.js and npm if not already installed.
2. Clone this repository to your local machine.
3. Navigate to the project directory in the terminal.
4. Run `npm install` to install dependencies.
5. Start the server with `npm start`.
6. Access the backend API at http://localhost:3001/api/persons.

## Usage

To interact with the backend application, make HTTP requests to the provided endpoints:

- GET /api/persons: Returns a list of phonebook entries.
- POST /api/persons: Adds a new phonebook entry.
- GET /api/persons/:id: Returns a specific phonebook entry.
- DELETE /api/persons/:id: Deletes a phonebook entry.

For detailed usage instructions and API documentation, refer to the code comments and documentation in the source files.

## Endpoints

- GET /api/persons
- POST /api/persons
- GET /api/persons/:id
- DELETE /api/persons/:id

## Technologies Used

- Node.js
- Express.js

## Folder Structure

- src/
  - index.js
  - routes/
    - persons.js
  - controllers/
    - personsController.js
  - models/
    - Person.js

## Contributing

Contributions are welcome! Feel free to submit issues, suggest improvements, or create pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or inquiries, you can reach out to [your email or contact information].
