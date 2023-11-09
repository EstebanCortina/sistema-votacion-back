const { app } = require('./config/express_config');
const morgan = require('morgan');
const { MORGAN_ENV, NODE_ENV, PORT } = require('./env_variables');

function customLogger(message: string) {
  return (req: Request, res: Response, next) => {
    console.log(message); // Agrega tu mensaje personalizado aquí
    next();
  };
}

// Utiliza el middleware personalizado antes de morgan para agregar un mensaje
app.use(customLogger(NODE_ENV));

app.use(morgan(MORGAN_ENV));

const router = require('./routes/index');
app.use('/', router);

app.listen(PORT, () => {
  console.log(`[${NODE_ENV}]Running on ${PORT}`);
});
