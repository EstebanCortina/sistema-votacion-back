const app = require('./config/express_config.js');
const morgan = require('morgan');
const { MORGAN_ENV, NODE_ENV, PORT } = require('./env_variables.js');
console.log(MORGAN_ENV);
app.use(morgan(MORGAN_ENV));
const router = require('./routes/index.js');
app.use('/', router);
app.listen(PORT, () => {
    console.log(`[${NODE_ENV}]Running on ${PORT}`);
});
