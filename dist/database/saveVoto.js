"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data = require('../models/voto');
function saveVoto(messageObj, fechaISO) {
    return __awaiter(this, void 0, void 0, function* () {
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
            yield nuevoDocumento.save();
        }
        catch (error) { }
    });
}
module.exports = saveVoto;
