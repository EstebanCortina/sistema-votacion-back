import { Voto } from '../types/voto';
const Data = require('../models/voto');

async function saveVoto(messageObj: Voto, fechaISO: string) {
  try {
    const nuevoDocumento = new Data({
      timeStamp: fechaISO,
      id_casilla: messageObj.id_casilla,
      ciudad: messageObj.ciudad,
      idVotante: messageObj.idVotante,
      voto: messageObj.voto,
      fecha: messageObj.fecha,
      hora: messageObj.hora,
    });

    await nuevoDocumento.save();
  } catch (error) {}
}

module.exports = saveVoto;
