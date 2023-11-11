const expressRouter = require('express').Router();
const { verifyToken } = require('../middleware/jwt');
expressRouter.get('/', (req, res): void => {
  res.status(200).send('<h1>Ruta</h1>');
});

const apiRouter = require('./api');
expressRouter.use('/api', verifyToken, apiRouter);

const tokenRouter = require('./jwtRouter');
expressRouter.use('/token', tokenRouter);

module.exports = expressRouter;
