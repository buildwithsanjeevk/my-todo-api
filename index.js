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
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const idParam = String(req.params.id);
  const todo = todos.find(todo => String(todo.id) === idParam);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
