# Express.js To-Do REST API

A simple Express.js REST API for a To-Do application.

## Endpoints

### GET /todos

Returns all to-dos as JSON.

**Query Parameter:** `completed` (optional) - Filter to-dos by completion status. Accepts `"true"` or `"false"` (case-insensitive). Example: `GET /todos?completed=true` returns all completed to-dos, `GET /todos?completed=false` returns all incomplete to-dos.

### GET /todos/:id

Returns a single to-do by its `id`.

## Running

1. Install dependencies: `npm install`
2. Start the server: `npm start`

The API will be available at `http://localhost:3000`.

This project uses an in-memory array of to-dos, so the sample data resets when the server restarts.
