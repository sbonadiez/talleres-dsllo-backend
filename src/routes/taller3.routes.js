const express = require('express');
const router = express.Router();
const { desglosarString, twoSum, conversionRomana, descomposicion } = require('../talleres/taller3');

router.post('/desglosar', (req, res) => {
  const { texto, tipo } = req.body;
  try {
    const result = desglosarString(texto, tipo);
    res.json({ result });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.post('/two-sum', (req, res) => {
  const { lista, target } = req.body;
  const result = twoSum(lista, target);
  res.json({ result });
});

router.post('/romana', (req, res) => {
  const { cifra } = req.body;
  const result = conversionRomana(cifra);
  res.json({ result });
});

router.post('/descomposicion', (req, res) => {
  const { entrada } = req.body;
  const result = descomposicion(entrada);
  res.json({ result });
});

module.exports = router;