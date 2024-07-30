# Contact Manager Backend Application

## Overview
A Contact Manager backend application built using Node.js and Express. this project will serves as a server-side component of a contact management system, providing RESTful API for managing contacts, including creating, reading, updating, and deleting contact information. 

## Key Features
- **RESTful API Endpoints**: Perform CRUD operations on contact data.
- **Data Validation**: Ensure all incoming data is validated.
- **Error Handling**: Implement robust error handling mechanisms.
- **Middleware Integration**: Use middleware for logging, authentication, and authorization.
- **Asynchronous Operations**: Handle asynchronous operations using `async/await`.
- **Database Integration**: Store and manage contact information using MongoDB or MySQL.
- **Environment Configuration**: Use environment variables for configuration.

## Technology Stack
- **Node.js**
- **Express**
- **Database**: MongoDB
- **Middleware**: created a validateTokenHandler function and configured it as middleware to run before processing the routes in the contact routes.
- **Authentication**: JsonWebToken library
- **Environment Variables**: dotenv

## API Endpoints
### User Management
- **POST /api/register**
  - **Description**: Register a new user.

- **POST /api/login**
  - **Description**: Log in a user and receive a JWT token.

- **POST /api/current**
  - **Description**: Retrieve the currently authenticated user's information using the provided JWT token.

### Contact Management
- **POST /api/contacts**: Create a new contact.
- **GET /api/contacts**: Retrieve all contacts.
- **GET /api/contacts/:id**: Retrieve a specific contact by ID.
- **PUT /api/contacts/:id**: Update an existing contact.
- **DELETE /api/contacts/:id**: Delete a contact by ID.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/contact-manager-backend.git
   cd contact-manager-backend
2. Install dependencies
    ```bash
    npm install
3.Set up environment variables
  Create a .env file in the root directory and add the following variables:
  
    PORT=3000
    DB_URI=mongodb://localhost:27017/contact-manager
    JWT_SECRET=your_jwt_secret

4.Run the application
  ```bash
   npm start
