# Express.js To-Do REST API

A simple Express.js REST API for a To-Do application.

## Endpoints

### GET /todos

Returns all to-dos as JSON.

#### Query Parameters

- `completed` (optional, boolean, case-insensitive)
  - Filter to-dos by completion status.
  - Accepted values: `true` or `false` (e.g., `?completed=true` or `?completed=false`).
  - If omitted, returns the full list.
  - If provided with any other value, returns a `400` error.

#### Example Requests

- Return all to-dos: `GET /todos`
- Filter completed: `GET /todos?completed=true`
- Filter incomplete: `GET /todos?completed=false`
- Invalid value: `GET /todos?completed=abc` → `400` `{ "error": "Invalid 'completed' query parameter. Expected 'true' or 'false'." }`

### GET /todos/:id

Returns a single to-do by its `id`.

## Running

1. Install dependencies: `npm install`
2. Start the server: `npm start`

The API will be available at `http://localhost:3000`.

This project uses an in-memory array of to-dos, so the sample data resets when the server restarts.
