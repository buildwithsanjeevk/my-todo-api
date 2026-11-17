const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const todos = [
  { id: 1, title: 'Learn Express', completed: false },
  { id: 2, title: 'Build a To-Do API', completed: true },
];

app.use(cors());
app.use(express.json());

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
