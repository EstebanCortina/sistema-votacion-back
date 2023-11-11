module.exports = {
    verifyToken: (req, res, next) => {
        const { SECRET_KEY } = require('../env_variables');
        const jwt = require('jsonwebtoken');
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
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
