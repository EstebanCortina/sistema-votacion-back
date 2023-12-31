const dotenv = require('dotenv');
const path = require('path');
const client = require('./services/mqttInstance');
const environment = process.env.NODE_ENV;
if (environment === 'dev') {
    const envFile = path.resolve(__dirname, '../env', `${environment}.env`);
    dotenv.config({ path: envFile });
}
else if (environment === 'testing') {
    const envFile = path.resolve(`${environment}.env`);
    console.log(envFile);
    dotenv.config({ path: envFile });
}
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    MORGAN_ENV: process.env.MORGAN_ENV || 'common',
    PORT: process.env.PORT || 443,
    SECRET_KEY: process.env.SECRET_KEY,
    MONGODB_URL: process.env.MONGODB_URL,
    mqttClient: client,
};
