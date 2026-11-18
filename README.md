# Express.js To-Do REST API

A simple Express.js REST API for a To-Do application.

## Endpoints

### GET /todos

Returns all to-dos as JSON.

### GET /todos/:id

Returns a single to-do item by its `id`. If found, returns the to-do object with HTTP status `200`. If not found, returns `{ "error": "Todo not found" }` with status `404`.

## Running

1. Install dependencies: `npm install`
2. Start the server: `npm start`

The API will be available at `http://localhost:3000`.

This project uses an in-memory array of to-dos, so the sample data resets when the server restarts.
