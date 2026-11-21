const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json');

let todos = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build a To-Do API", completed: true },
  { id: 3, title: "Write unit tests", completed: false },
  { id: 4, title: "Review pull requests", completed: false },
  { id: 5, title: "Update project documentation", completed: true }
];

app.get('/todos', (req, res) => {
  const { completed } = req.query;

  if (completed === undefined) {
    return res.json(todos);
  }

  const normalizedCompleted = String(Array.isArray(completed) ? completed[0] : completed).trim().toLowerCase();

  if (normalizedCompleted !== 'true' && normalizedCompleted !== 'false') {
    return res.status(400).json({ error: "Invalid 'completed' query parameter. Expected 'true' or 'false'." });
  }

  const filterCompleted = normalizedCompleted === 'true';
  const filteredTodos = todos.filter(todo => todo.completed === filterCompleted);

  return res.json(filteredTodos);
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

app.post('/api/todos', (req, res) => {
  const { title, completed } = req.body || {};

  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: "Invalid 'title'. Expected a non-empty string." });
  }

  const id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  const newTodo = {
    id,
    title,
    completed: typeof completed === 'boolean' ? completed : false
  };

  todos.push(newTodo);

  return res.status(201).json(newTodo);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
