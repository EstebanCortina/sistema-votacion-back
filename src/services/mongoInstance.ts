module.exports = (() => {
  const mongoose = require('mongoose');
  const uri =
    'mongodb+srv://ecortina:universidad098@cluster0.llifhyn.mongodb.net/votacion?retryWrites=true&w=majority';

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
