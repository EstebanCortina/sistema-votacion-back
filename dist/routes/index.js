const express_router = require('express').Router();
express_router.get('/', (req, res) => {
    res.status(200).send("<h1>Ruta</h1>");
});
module.exports = express_router;
