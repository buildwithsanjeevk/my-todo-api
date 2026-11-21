const request = require('supertest');
const app = require('../index');

describe('GET /todos', () => {
  test('returns all to-dos with status 200 when no filter is provided', async () => {
    const res = await request(app).get('/todos');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(5);
    expect(res.body[0]).toMatchObject({ id: 1, title: 'Learn Express', completed: false });
  });

  test('returns only completed to-dos when completed=true', async () => {
    const res = await request(app).get('/todos?completed=true');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(2);
    expect(res.body.every(todo => todo.completed === true)).toBe(true);
    expect(res.body.map(todo => todo.id)).toEqual([2, 5]);
  });

  test('returns only incomplete to-dos when completed=false', async () => {
    const res = await request(app).get('/todos?completed=false');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(3);
    expect(res.body.every(todo => todo.completed === false)).toBe(true);
    expect(res.body.map(todo => todo.id)).toEqual([1, 3, 4]);
  });

  test('accepts case-insensitive completed parameter (TRUE)', async () => {
    const res = await request(app).get('/todos?completed=TRUE');

    expect(res.status).toBe(200);
    expect(res.body.every(todo => todo.completed === true)).toBe(true);
    expect(res.body).toHaveLength(2);
  });

  test('trims whitespace from completed parameter', async () => {
    const res = await request(app)
      .get('/todos')
      .query({ completed: '  true  ' });

    expect(res.status).toBe(200);
    expect(res.body.every(todo => todo.completed === true)).toBe(true);
  });

  test('uses only the first value when completed parameter is repeated', async () => {
    const res = await request(app)
      .get('/todos')
      .query({ completed: ['true', 'false'] });

    expect(res.status).toBe(200);
    expect(res.body.every(todo => todo.completed === true)).toBe(true);
  });

  test('returns 400 with error message for invalid completed parameter', async () => {
    const res = await request(app).get('/todos?completed=invalid');

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: "Invalid 'completed' query parameter. Expected 'true' or 'false'." });
  });

  test('returns 400 for empty completed parameter', async () => {
    const res = await request(app).get('/todos?completed=');

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('returns to-dos matching the Todo schema', async () => {
    const res = await request(app).get('/todos');

    expect(res.status).toBe(200);
    res.body.forEach(todo => {
      expect(todo).toHaveProperty('id');
      expect(todo).toHaveProperty('title');
      expect(todo).toHaveProperty('completed');
      expect(typeof todo.id).toBe('number');
      expect(typeof todo.title).toBe('string');
      expect(todo.title.length).toBeGreaterThan(0);
      expect(typeof todo.completed).toBe('boolean');
    });
  });
});
