const express = require('express');
const app = express();
const PORT = 3000;

// Sample data
let todos = [
  { id: 1, title: 'Learn Express', completed: false },
  { id: 2, title: 'Build a REST API', completed: true }
];

app.use(express.json());

// GET /todos - get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET /todos/:id - get a single todo by id
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => String(todo.id) === String(id));
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ "error": "Todo not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
