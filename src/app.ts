const { app } = require('./config/express_config');
const morgan = require('morgan');
const { MORGAN_ENV, NODE_ENV, PORT } = require('./env_variables');

app.use(morgan(MORGAN_ENV));

const router = require('./routes/index');
app.use('/', router);

app.listen(PORT, () => {
  console.log(`[${NODE_ENV}]Running on ${PORT}`);
});
