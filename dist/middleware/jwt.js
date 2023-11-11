const { SECRET_KEY } = require('../env_variables');
const jwt = require('jsonwebtoken');
module.exports = {
    verifyToken: (req, res, next) => {
        const token = req.body.token;
        if (!token) {
            return res.status(403).json({ message: 'Token no proporcionado' });
        }
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token inválido' });
            }
            req.decoded = decoded;
            next();
        });
    },
};
