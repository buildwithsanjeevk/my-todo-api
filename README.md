# Todo API

A simple Express API for managing to-dos.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET    | /todos     | Get all todos |
| POST   | /todos     | Create a new todo |
| GET    | /todos/:id | Get a single todo by its ID |

### Details

- **GET /todos** – Returns an array of all todos.
- **POST /todos** – Creates a new todo (not implemented in this snippet).
- **GET /todos/:id** – Returns the todo with the specified `id`. If the `id` does not exist, returns HTTP 404 with `{ "error": "Todo not found" }`.

## Sample Data

