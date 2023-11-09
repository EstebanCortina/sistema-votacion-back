const dotenv = require('dotenv');
const path = require('path');
const environment = process.env.NODE_ENV;
if (environment !== 'prod') {
    const envFile = path.resolve(__dirname, '../env', `${environment}.env`);
    dotenv.config({ path: envFile });
}
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    MORGAN_ENV: process.env.MORGAN_ENV || 'common',
    PORT: process.env.PORT || 443,
};
