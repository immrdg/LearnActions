const request = require('supertest');
const createApp = require('../app');

describe('Express App', () => {
  let app;
  
  beforeEach(() => {
    app = createApp();
  });

  describe('GET /', () => {
    it('should return "Hello World!" with status 200', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.text).toBe('Hello World!');
    });

    it('should have correct content-type header', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.headers['content-type']).toMatch(/text\/html/);
    });
  });

  describe('404 handling', () => {
    it('should return 404 for non-existent routes', async () => {
      await request(app)
        .get('/nonexistent')
        .expect(404);
    });
  });
});