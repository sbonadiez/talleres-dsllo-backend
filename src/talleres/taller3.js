function desglosarString(str, tipo) {
  const limpio = str.toLowerCase();
  const vocales = 'aeiou';
  let v = 0, c = 0;
  for (const ch of limpio) {
    if (/[a-z]/.test(ch)) {
      if (vocales.includes(ch)) v++; else c++;
    }
  }
  if (tipo === 'vocales') return v;
  if (tipo === 'consonantes') return c;
  throw new Error('tipo debe ser "vocales" o "consonantes"');
}

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i);
  }
  return null;
}

function conversionRomana(s) {
  const valores = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0;
  const up = s.toUpperCase();
  for (let i = 0; i < up.length; i++) {
    const curr = valores[up[i]], next = valores[up[i+1]] || 0;
    if (curr < next) total -= curr; else total += curr;
  }
  return total;
}

function descomposicion(entrada) {
  const partes = entrada.split(",").map(x => x.trim());
  const objetivo = partes[0];
  const dic = partes.slice(1);
  const set = new Set(dic);
  for (const w1 of dic) {
    if (objetivo.startsWith(w1)) {
      const w2 = objetivo.slice(w1.length);
      if (set.has(w2)) return [w1, w2];
    }
  }
  return null;
}

module.exports = { desglosarString, twoSum, conversionRomana, descomposicion };