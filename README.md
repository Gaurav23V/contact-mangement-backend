# Contact Management System Backend

A RESTful API backend for managing contacts, built with Node.js, Express, TypeScript, and MongoDB. This service provides endpoints for creating, reading, updating, and deleting contact information.

## Live Demo
The frontend application using this backend is deployed at: https://contact-management-frontend-tau.vercel.app/

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB Atlas
- **Validation**: Express Validator
- **ODM**: Mongoose

## Why MongoDB?
MongoDB was chosen for this project because:
- **Flexible Schema**: Allows for easy modifications to contact data structure
- **Scalability**: Horizontal scaling capabilities for future growth
- **JSON-like Documents**: Natural fit for JavaScript/TypeScript applications
- **Atlas Integration**: Provides reliable cloud hosting with robust monitoring
- **Rich Querying**: Powerful query capabilities for future feature additions

## API Endpoints

### 1. Create Contact
- **Endpoint**: `POST /api/contacts`
- **Purpose**: Creates a new contact
- **Request Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phoneNumber": "1234567890",
  "company": "Tech Corp",
  "jobTitle": "Developer"
}
```
- **Response**: Returns created contact with 201 status code

### 2. Get All Contacts
- **Endpoint**: `GET /api/contacts`
- **Purpose**: Retrieves all contacts
- **Response**: Array of contact objects

### 3. Update Contact
- **Endpoint**: `PUT /api/contacts/:id`
- **Purpose**: Updates an existing contact
- **Request Body**: Same as create (all fields optional)
- **Response**: Returns updated contact

### 4. Delete Contact
- **Endpoint**: `DELETE /api/contacts/:id`
- **Purpose**: Deletes a contact
- **Response**: Success message

## Data Validation

The API implements comprehensive validation using express-validator:

### Contact Fields Validation:
- **firstName**: Required, 2-50 characters
- **lastName**: Required, 2-50 characters
- **email**: Required, valid email format
- **phoneNumber**: Required, valid phone format
- **company**: Optional, max 100 characters
- **jobTitle**: Optional, max 100 characters

## Error Handling
The API provides detailed error messages for:
- Invalid input data
- Database operation failures
- Resource not found scenarios
- Server errors

## Local Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd contact-management-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=5000
MONGODB_URI=mongodb+srv://gaurav2301v:83dcqAKzCmDbH6no@cluster0.uaa4j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
Note: For production use, it's recommended to use your own MongoDB instance.

4. Start the development server:
```bash
npm run dev
```

## Available Scripts
- `npm run dev`: Starts development server with hot-reload
- `npm run build`: Compiles TypeScript to JavaScript
- `npm start`: Runs the compiled application
- `npm run watch-ts`: Watches TypeScript files for changes

## Project Structure
```
src/
├── controllers/        # Request handlers
├── models/            # Database models
├── routes/            # API routes
├── validators/        # Input validation
├── middleware/        # Custom middleware
└── index.ts          # Application entry point
```

## API Testing
You can test the API using tools like Postman or curl:

```bash
# Create a contact
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phoneNumber": "1234567890",
    "company": "Tech Corp",
    "jobTitle": "Developer"
  }'

# Get all contacts
curl http://localhost:5000/api/contacts
```

## Deployment
The API is deployed on Railway and automatically deploys from the main branch.

## Environment Variables
Required environment variables:
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License.
