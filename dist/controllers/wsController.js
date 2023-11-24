var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Data = require('../models/voto');
const wsBroadcast = require('../handlers/wsBroadcast');
const conexiones = [];
module.exports = (ws) => {
    const { mqttClient } = require('../env_variables');
    console.log('Nueva conexion');
    conexiones.push(ws);
    mqttClient.on('message', (topic, message) => {
        const messageObj = JSON.parse(message);
        const fechaActual = new Date();
        const offsetHorario = -6 * 60 * 60 * 1000;
        fechaActual.setTime(fechaActual.getTime() + offsetHorario);
        const fechaISO = fechaActual.toISOString();
        console.log(fechaActual);
        messageObj.timeStamp = fechaActual;
        (() => __awaiter(this, void 0, void 0, function* () {
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
                // Guardar el nuevo documento
                yield nuevoDocumento.save();
            }
            catch (error) { }
        }))();
        const nuevoVoto = new Data(messageObj);
        nuevoVoto.save();
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                yield wsBroadcast(conexiones, ws, messageObj);
            }
            catch (error) {
                console.error(error);
            }
        }))();
    });
    //Websockets actions
    ws.on('message', (message) => {
        const publish = JSON.parse(message);
        if (publish.type === 1) {
            client.publish('focoEsli/api/foco1', 'Mensaje desde front');
        }
        else if (publish.type === 2) {
            client.publish('focoEsli/api/foco2', 'Mensaje desde front');
        }
        else if (publish.type === 3) {
            client.publish('focoEsli/api/foco3', 'Mensaje desde front');
        }
        else {
            client.publish('focoEsli/api/foco4', 'Mensaje desde front');
        }
    });
    ws.on('close', () => {
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                yield wsBroadcast(conexiones, ws);
                console.log('cerrado');
            }
            catch (error) {
                console.error(error);
            }
        }))();
    });
};
