module.exports = (() => {
  const router = require('express').Router();

  const ApiController = require('@controllers/apiController');
  router.get('/', ApiController);
  return router;
})();
