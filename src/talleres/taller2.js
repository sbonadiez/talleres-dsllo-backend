function findMax(lista) {
  if (!Array.isArray(lista) || lista.length === 0) return undefined;
  let max = lista[0];
  for (let i = 1; i < lista.length; i++) if (lista[i] > max) max = lista[i];
  return max;
}

function containsNumber(lista, numero) {
  return Array.isArray(lista) && lista.includes(numero);
}

function sumArray(lista) {
  if (!Array.isArray(lista)) return 0;
  return lista.reduce((acc, n) => acc + Number(n), 0);
}

function findMissingNumbers(lista) {
  if (!Array.isArray(lista) || lista.length === 0) return [];
  const min = Math.min(...lista);
  const max = Math.max(...lista);
  const faltantes = [];
  for (let i = min; i <= max; i++) if (!lista.includes(i)) faltantes.push(i);
  return faltantes;
}

module.exports = { findMax, containsNumber, sumArray, findMissingNumbers };