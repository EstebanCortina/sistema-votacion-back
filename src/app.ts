const { app } = require('./config/express_config');
const morgan = require('morgan');
const { MORGAN_ENV, NODE_ENV, PORT, mqttClient } = require('./env_variables');
const { server } = require('./services/wssInstance');
const getDate = require('./handlers/getDate');
const saveVoto = require('./database/saveVoto');

app.use(morgan(MORGAN_ENV));
mqttClient.on('message', (topic, message) => {
  const messageObj = JSON.parse(message);
  const fecha = getDate();
  console.log(messageObj);
  console.log(fecha);
  saveVoto(messageObj, fecha);
});
const router = require('./routes/index');
app.use('/', router);

server.listen(PORT, () => {
  console.log(`[${NODE_ENV}]Running on ${PORT}`);
});
