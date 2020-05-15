const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(createProxyMiddleware('/api', { 
    target: 'http://demo.live-ctrl.com/aijukex/',
    changeOrigin:true,
    pathRewrite: {
                "^/api": "/" // 把/api 变成空
            }
     }));
};