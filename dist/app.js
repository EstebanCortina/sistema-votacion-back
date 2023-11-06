"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_config_js_1 = require("./config/express_config.js");
const morgan = require('morgan');
const { MORGAN_ENV, NODE_ENV, PORT } = require('./env_variables.js');
function customLogger(message) {
    return (req, res, next) => {
        console.log(message); // Agrega tu mensaje personalizado aquí
        next();
    };
}
// Utiliza el middleware personalizado antes de morgan para agregar un mensaje
express_config_js_1.app.use(customLogger(NODE_ENV));
express_config_js_1.app.use(morgan(MORGAN_ENV));
const router = require('./routes/index.js');
express_config_js_1.app.use('/', router);
express_config_js_1.app.listen(PORT, () => {
    console.log(`[${NODE_ENV}]Running on ${PORT}`);
});
