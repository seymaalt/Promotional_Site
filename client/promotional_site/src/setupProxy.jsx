// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'http://localhost:5173', // Bu kısım, istek yapacağınız API'nin başlangıç URL'sini belirtir
    createProxyMiddleware({
      target: 'http://showcaseify.online', // API'nin tam URL'sini belirtin
      changeOrigin: true,
    })
  );
};
