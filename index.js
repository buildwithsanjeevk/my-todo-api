// entire file content ...
const express = require('express');
const app = express();
const port = 3000;

let todos = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build a To-Do API", completed: true },
  { id: 3, title: "Write unit tests", completed: false },
  { id: 4, title: "Review pull requests", completed: false },
  { id: 5, title: "Update project documentation", completed: true }
];

// GET endpoint to retrieve a single todo by its ID
app.get('/todos/:id', (req, res) => {
  // Convert the URL parameter to string for comparison
  const idParam = String(req.params.id);
  // Find the todo with matching ID
  const todo = todos.find(todo => String(todo.id) === idParam);
  if (todo) {
    // Return the todo with 200 OK status (kept to ensure proper response)
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
