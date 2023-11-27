module.exports = (() => {
  const { MONGODB_URL } = require('../env_variables');
  const mongoose = require('mongoose');
  const uri = MONGODB_URL;

  const dbConnect = async () => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexion exitosa a la bd');
    } catch (error) {
      console.log('Error DB:' + error);
    }
  };
  return dbConnect;
})();
