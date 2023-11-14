module.exports = (() => {
    const router = require('express').Router();
    const healthController = require('../controllers/healthController');
    router.get('/', healthController);
    return router;
})();
