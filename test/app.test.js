const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello from GitHub Actions CI/CD workflow!');
  });
});
