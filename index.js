const express = require('express');
const app = express();

const todos = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Write documentation', completed: false }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(t => String(t.id) === String(id));
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
