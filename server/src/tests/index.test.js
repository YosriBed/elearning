const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../app');

describe('Routes', () => {
  describe('GET /placeholder', () => {
    test('should return 200 OK', async () => {
      await request(app)
        .get('/api/placeholder')
        .expect(httpStatus.OK);
    });
  });
});
