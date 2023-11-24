module.exports = (() => {
  const { app } = require('../config/express_config');

  const http = require('http');
  const WebSocket = require('ws');
  const server = http.createServer(app);
  const wss = new WebSocket.Server({ server });
  return {
    server: server,
    wss: wss,
  };
})();
