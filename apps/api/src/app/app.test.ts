import * as request from 'supertest';
import app from './app';
test('it should load 10 latest blocks', () => {
  request(app)
    .get('/api/block/latest')
    .expect('Content-Type', /json/)
    .expect(200);
});
