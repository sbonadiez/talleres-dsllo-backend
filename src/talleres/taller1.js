function convertidorTemp(celsius) {
  if (celsius === undefined) throw new Error('Falta el parámetro celsius');
  const n = Number(celsius);
  if (Number.isNaN(n)) throw new Error('celsius debe ser un número');
  return (n * 9 / 5) + 32;
}

function resolvedor(a, b, c, signo = '+') {
  if ([a, b, c].some(v => v === undefined)) throw new Error('Faltan parámetros a, b o c');
  const A = Number(a), B = Number(b), C = Number(c);
  const disc = B * B - 4 * A * C;
  if (disc < 0) return null;
  const raiz = Math.sqrt(disc);
  return signo === '+' ? (-B + raiz) / (2 * A) : (-B - raiz) / (2 * A);
}

function mejorParidad(numero) {
  if (numero === undefined) throw new Error('Falta parámetro numero');
  const n = Number(numero);
  return n % 2 === 0;
}

function peorParidad(n) {
  switch (n) {
    case 0: case 2: case 4: case 6: case 8: case 10:
      return "par";
    case 1: case 3: case 5: case 7: case 9:
      return "impar";
    default:
      return "fuera de rango";
  }
}

module.exports = { convertidorTemp, resolvedor, mejorParidad, peorParidad };