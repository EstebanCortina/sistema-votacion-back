const expressRouter = require('express').Router();
const { verifyToken } = require('../middleware/jwt');
expressRouter.get('/', (req, res) => {
    res.status(200).send('<h1>Rradsd</h1>');
});
const apiRouter = require('./apiRouter');
expressRouter.use('/api', verifyToken, apiRouter);
const tokenRouter = require('./jwtRouter');
expressRouter.use('/token', tokenRouter);
module.exports = expressRouter;
