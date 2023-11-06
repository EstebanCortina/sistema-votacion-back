const app = require('./config/express_config.js');
const { NODE_ENV, PORT } = require('./env_variables.js');
const router = require('./routes/index.js');
app.use('/', router);
app.listen(PORT, () => {
    console.log(`[${NODE_ENV}]Running on ${PORT}`);
});
