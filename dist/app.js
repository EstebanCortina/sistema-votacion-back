const app = require('./config/express_config.js');
const router = require('./routes/index.js');
app.use('/', router);
app.listen(3030, () => {
    console.log(`Running on `);
});
