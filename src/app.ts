const { app } = require('./config/express_config');
const morgan = require('morgan');
const { MORGAN_ENV, NODE_ENV, PORT } = require('./env_variables');
const { server } = require('./services/wssInstance');

app.use(morgan(MORGAN_ENV));

const router = require('./routes/index');
app.use('/', router);

server.listen(PORT, () => {
  console.log(`[${NODE_ENV}]Running on ${PORT}`);
});
