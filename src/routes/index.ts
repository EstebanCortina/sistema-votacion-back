const express_router = require('express').Router();

express_router.get('/', (req, res): void => {
  res.status(200).send("<h1>Ruta</h1>");
});

const api_router = require('./api.js')
express_router.use('/api', api_router);

module.exports = express_router;
