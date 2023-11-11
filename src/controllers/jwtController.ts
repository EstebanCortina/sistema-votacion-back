module.exports = (req, res) => {
  const { SECRET_KEY } = require('../env_variables');
  const jwt = require('../services/jwtInstance');
  const token = jwt.sign({ user: 'Esteban' }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
};
