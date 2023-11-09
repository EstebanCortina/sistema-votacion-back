const expressRouter = require('express').Router();

expressRouter.get('/', (req, res): void => {
  res.status(200).send('<h1>Ruta</h1>');
});

const apiRouter = require('./api');
expressRouter.use('/api', apiRouter);

module.exports = expressRouter;
