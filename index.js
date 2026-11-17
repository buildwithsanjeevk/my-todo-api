const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: 'Learn Express', completed: false },
  { id: 2, title: 'Build a To-Do API', completed: true },
  { id: 3, title: 'Write unit tests', completed: false },
  { id: 4, title: 'Review pull requests', completed: false },
  { id: 5, title: 'Update project documentation', completed: true }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => String(todo.id) === String(id));
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(3000);
