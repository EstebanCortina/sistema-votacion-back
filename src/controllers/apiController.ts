const { wss } = require('../services/wssInstance');
const wsController = require('./wsController');
wss.on('connection', wsController);

module.exports = (req, res) => {
  res.status(200).send('controller api');
};
