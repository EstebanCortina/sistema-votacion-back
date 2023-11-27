var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const conexiones = [];
module.exports = (ws) => {
    const WebSocket = require('ws');
    const { mqttClient } = require('../env_variables');
    console.log('Nueva conexion');
    conexiones.push(ws);
    mqttClient.on('message', (topic, message) => {
        const messageObj = JSON.parse(message);
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                conexiones.forEach((client) => {
                    console.log('mandando');
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(messageObj));
                    }
                });
            }
            catch (error) {
                console.error(error);
            }
        }))();
    });
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
                const index = conexiones.indexOf(ws);
                if (index !== -1) {
                    conexiones.splice(index, 1);
                }
                console.log('Conexion cerrada');
            }
            catch (error) {
                console.error(error);
            }
        }))();
    });
};
