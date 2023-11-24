const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    id_casilla: Number,
    ciudad: String,
    id_votante: Number,
    voto: String,
    fecha: String,
    hora: String,
}, { collection: 'votos' });
const DataModel = mongoose.model('Data', dataSchema);
module.exports = DataModel;
