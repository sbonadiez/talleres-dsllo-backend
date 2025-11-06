const express = require('express');
const router = express.Router();
const { findMax, containsNumber, sumArray, findMissingNumbers } = require('../talleres/taller2');

router.post('/find-max', (req, res) => {
  const { lista } = req.body;
  res.json({ result: findMax(lista) });
});

router.post('/contains-number', (req, res) => {
  const { lista, numero } = req.body;
  res.json({ result: containsNumber(lista, numero) });
});

router.post('/sum-array', (req, res) => {
  const { lista } = req.body;
  res.json({ result: sumArray(lista) });
});

router.post('/find-missing', (req, res) => {
  const { lista } = req.body;
  res.json({ result: findMissingNumbers(lista) });
});

module.exports = router;