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

app.get('/todos', (req, res) => {
  const completed = req.query.completed;

  if (completed === undefined) {
    return res.status(200).json(todos);
  }

  const normalized = String(completed).toLowerCase();

  if (normalized === 'true') {
    const filtered = todos.filter(t => t.completed === true);
    return res.status(200).json(filtered);
  }

  if (normalized === 'false') {
    const filtered = todos.filter(t => t.completed === false);
    return res.status(200).json(filtered);
  }

  return res.status(400).json({
    error: "Invalid 'completed' query parameter. Expected 'true' or 'false'."
  });
});

app.get('/todos/:id', (req, res) => {
  // Find a todo by its ID
  const todo = todos.find(todo => String(todo.id) === String(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
