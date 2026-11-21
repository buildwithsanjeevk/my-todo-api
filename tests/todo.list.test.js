const request = require('supertest');
const app = require('../index');

describe('GET /todos', () => {
  // Test case 1: No query params - returns all 5 todos
  test('returns all todos when no query parameters are provided', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(5);
  });

  // Test case 2: completed=true - returns 2 completed todos
  test('returns only completed todos when ?completed=true is provided', async () => {
    const res = await request(app).get('/todos?completed=true');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body.every(todo => todo.completed === true)).toBe(true);
  });

  // Test case 3: completed=false - returns 3 incomplete todos
  test('returns only incomplete todos when ?completed=false is provided', async () => {
    const res = await request(app).get('/todos?completed=false');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(3);
    expect(res.body.every(todo => todo.completed === false)).toBe(true);
  });

  // Test case 4: completed=TRUE (case-insensitive check) - returns 2 completed todos
  test('returns only completed todos when ?completed=TRUE (case-insensitive) is provided', async () => {
    const res = await request(app).get('/todos?completed=TRUE');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });

  // Test case 5: completed=invalid - returns 400 error
  test('returns 400 error when ?completed is an invalid value', async () => {
    const res = await request(app).get('/todos?completed=invalid');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', "Invalid 'completed' query parameter. Expected 'true' or 'false'.");
  });

  // Test case 6: completed= (empty string/whitespace) - returns 400 error
  test('returns 400 error when ?completed is an empty or whitespace string', async () => {
    const res = await request(app).get('/todos?completed=');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', "Invalid 'completed' query parameter. Expected 'true' or 'false'.");
  });
});
