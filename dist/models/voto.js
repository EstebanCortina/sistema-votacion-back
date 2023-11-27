const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    timeStamp: {
        type: Date,
    },
    id_casilla: Number,
    ciudad: String,
    idVotante: Number,
    voto: String,
    fecha: String,
    hora: String,
}, { collection: 'votos' });
const DataModel = mongoose.model('Data', dataSchema);
module.exports = DataModel;
