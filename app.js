const express = require('express');

const createApp = () => {
  const app = express();

  // Middleware to parse JSON and URL-encoded data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // POST endpoint for /test
  app.post('/test', (req, res) => {
    const receivedTime = new Date().toISOString();
    
    const response = {
      receivedTime: receivedTime,
      postParams: req.body,
      requestDetails: {
        method: req.method,
        url: req.url,
        originalUrl: req.originalUrl,
        baseUrl: req.baseUrl,
        path: req.path,
        protocol: req.protocol,
        secure: req.secure,
        ip: req.ip,
        ips: req.ips,
        hostname: req.hostname,
        fresh: req.fresh,
        stale: req.stale,
        xhr: req.xhr
      },
      headers: req.headers,
      cookies: req.cookies,
      signedCookies: req.signedCookies,
      query: req.query,
      params: req.params
    };

    res.json(response);
  });

  return app;
};

module.exports = createApp;