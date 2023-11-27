var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = (() => {
    const { MONGODB_URL } = require('../env_variables');
    const mongoose = require('mongoose');
    const uri = MONGODB_URL;
    const dbConnect = () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Conexion exitosa a la bd');
        }
        catch (error) {
            console.log('Error DB:' + error);
        }
    });
    return dbConnect;
})();
