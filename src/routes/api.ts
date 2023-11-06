namespace Api {
  const router = require('express').Router()

  const api_controller = require('../controllers/api_controller.js');
  router.get('/', api_controller);

  module.exports = router;
};