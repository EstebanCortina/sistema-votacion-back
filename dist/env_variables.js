const dotenv = require('dotenv');
const path = require('path');
// Obtén el valor de NODE_ENV
const environment = process.env.NODE_ENV;
if (environment !== 'prod') {
    // Construye la ruta al archivo .env basada en el valor de NODE_ENV
    const envFile = path.resolve(__dirname, '..', `${environment}.env`);
    dotenv.config({ path: envFile });
    console.log(envFile);
}
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    MORGAN_ENV: process.env.MORGAN_ENV || 'common',
    PORT: process.env.PORT || 443,
};
