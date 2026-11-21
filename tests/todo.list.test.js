const request = require('supertest');
const app = require('../index');

describe('GET /todos', () => {
  // Test case 1: No query parameters - returns all todos
  test('returns all todos when no query parameters are provided', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    // Based on index.js initial data: 5 todos
    expect(res.body.length).toBe(5);
  });

  // Test case 2: Filter by completed=true (happy path)
  test('returns only completed todos when ?completed=true is provided', async () => {
    const res = await request(app).get('/todos?completed=true');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    // Initial data has 2 completed todos (id 2, id 5)
    expect(res.body.length).toBe(2);
    expect(res.body.every(todo => todo.completed === true)).toBe(true);
  });

  // Test case 3: Filter by completed=false (happy path)
  test('returns only incomplete todos when ?completed=false is provided', async () => {
    const res = await request(app).get('/todos?completed=false');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    // Initial data has 3 incomplete todos (id 1, id 3, id 4)
    expect(res.body.length).toBe(3);
    expect(res.body.every(todo => todo.completed === false)).toBe(true);
  });

  // Test case 4: Case-insensitive check (TRUE)
  test('returns only completed todos when ?completed=TRUE is provided (case-insensitive)', async () => {
    const res = await request(app).get('/todos?completed=TRUE');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);
  });

  // Test case 5: Invalid query parameter
  test('returns 400 when ?completed is an invalid value', async () => {
    const res = await request(app).get('/todos?completed=invalid');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', "Invalid 'completed' query parameter. Expected 'true' or 'false'.");
  });
});
