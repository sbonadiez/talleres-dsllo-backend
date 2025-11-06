const express = require('express');
const router = express.Router();
const { convertidorTemp, resolvedor, mejorParidad, peorParidad } = require('../talleres/taller1');

router.post('/convertir-temp', (req, res) => {
  try {
    const { celsius } = req.body;
    res.json({ result: convertidorTemp(celsius) });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.post('/resolvedor', (req, res) => {
  try {
    const { a, b, c, signo } = req.body;
    res.json({ result: resolvedor(a, b, c, signo) });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.post('/mejor-paridad', (req, res) => {
  try {
    const { numero } = req.body;
    res.json({ result: mejorParidad(numero) });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.post('/peor-paridad', (req, res) => {
  try {
    const { numero } = req.body;
    res.json({ result: peorParidad(numero) });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

module.exports = router;