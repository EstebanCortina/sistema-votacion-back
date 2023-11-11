const expressRouter = require('express').Router();
expressRouter.get('/', (req, res) => {
    res.status(200).send('<h1>Ruta</h1>');
});
const apiRouter = require('./api');
expressRouter.use('/api', apiRouter);
const tokenRouter = require('./jwtRouter');
expressRouter.use('/token', tokenRouter);
module.exports = expressRouter;
