module.exports = (() => {
  const router = require('express').Router();

  const jwtController = require('../controllers/jwtController');
  router.get('/', jwtController);
  return router;
})();
