import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send("<h1>Ruta base</h1>");
})

export { router }
