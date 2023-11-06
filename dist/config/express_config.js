const express = require('express');
const express_app = express();
express_app.use(express.json());
express_app.use(express.urlencoded({ extended: true }));
//app.use(express.static(__dirname + '/public'));
module.exports = express_app;
