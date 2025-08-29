/**
 * Taller 02 - Desarrollo Web Backend
 * Archivo: taller2.js
 * Sharik Bonadiez Jimenez
 */

// Punto 1
function findMax(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return undefined;
  }
  let max = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > max) {
      max = lista[i];
    }
  }
  return max;
}

// Punto 2
function containsNumber(lista, numero) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return true;
    }
  }
  return false;
}

// Punto 3
function sumArray(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i];
  }
  return total;
}

// Punto 4
function findMissingNumbers(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return [];
  }

  // Encontrar min y max
  let min = lista[0];
  let max = lista[0];
  for (let i = 1; i < lista.length; i++) {
    const v = lista[i];
    if (v < min) min = v;
    if (v > max) max = v;
  }

  const faltantes = [];
  for (let n = min; n <= max; n++) {
    if (!containsNumber(lista, n)) {
      faltantes.push(n);
    }
  }
  return faltantes;
}


module.exports = { findMax, containsNumber, sumArray, findMissingNumbers };


if (require.main === module) {
  const lista = [3, 17, -1, 4, -19];
  console.log('Punto 1 ->', findMax(lista));                // 17
  console.log('Punto 2A ->', containsNumber(lista, 2));     // false
  console.log('Punto 2B ->', containsNumber(lista, 4));     // true
  console.log('Punto 3 ->', sumArray(lista));               // 4
  console.log('Punto 4 ->', findMissingNumbers([7,2,4,6,3,9])); // [5, 8]
}
