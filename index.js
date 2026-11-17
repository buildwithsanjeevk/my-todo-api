const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const todos = [
  {
    id: 1,
    title: 'Learn Express.js',
    completed: false
  },
  {
    id: 2,
    title: 'Build a To-Do REST API',
    completed: true
  }
];

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
