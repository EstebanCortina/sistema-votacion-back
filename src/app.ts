const app = require('./config/express_config.js');
const { HOST, PORT } = require('./env_variables.js');

const router = require('./routes/index.js');
app.use('/', router)

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
})