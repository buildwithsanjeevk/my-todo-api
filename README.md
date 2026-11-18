# Express.js To-Do REST API

A simple Express.js REST API for a To-Do application.

## Endpoints

### GET /todos

Returns all to-dos as JSON.

#### Query Parameters

- `completed` (optional): Filter by completion status. Accepts `"true"` or `"false"` (case-insensitive).

Example requests:

- `GET /todos` - returns all to-dos.
- `GET /todos?completed=true` - returns completed to-dos.
- `GET /todos?completed=false` - returns incomplete to-dos.

If `completed` is provided and is not `"true"` or `"false"`, the API returns a `400` response with JSON body:

`{ "error": "Invalid 'completed' query parameter. Expected 'true' or 'false'." }`

### GET /todos/:id

Returns a single to-do by its `id`.

## Running

1. Install dependencies: `npm install`
2. Start the server: `npm start`

The API will be available at `http://localhost:3000`.

This project uses an in-memory array of to-dos, so the sample data resets when the server restarts.

## API Documentation

Interactive Swagger UI is available at:

`http://localhost:3000/api-docs`
