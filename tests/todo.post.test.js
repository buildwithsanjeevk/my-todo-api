const request = require('supertest');
const app = require('../index');

describe('POST /api/todos', () => {
  test('creates a to-do with default completed=false and returns 201', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 'Write docs' });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Write docs');
    expect(res.body.completed).toBe(false);
    expect(typeof res.body.id).toBe('number');
  });

  test('creates a to-do with a provided completed value', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 'Already done', completed: true });

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ title: 'Already done', completed: true });
  });

  test('returns 400 when title is missing', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({});

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('returns 400 when title is blank', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: '   ' });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('returns 400 when title is not a string', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 42 });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
