var Enviroment;
(function (Enviroment) {
    const dotenv = require('dotenv');
    const path = require('path');
    // Obtén el valor de NODE_ENV
    const environment = process.env.NODE_ENV;
    console.log(environment);
    // Construye la ruta al archivo .env basada en el valor de NODE_ENV
    const envFile = path.resolve(__dirname, '..', 'dist', `${environment}Environment`, `${environment}.env`);
    dotenv.config({ path: envFile });
    module.exports = {
        NODE_ENV: process.env.NODE_ENV || 'development',
        HOST: process.env.HOST || 'localhost',
        PORT: process.env.PORT || 3000,
    };
})(Enviroment || (Enviroment = {}));
