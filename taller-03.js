/**
 * taller-03.js
 * Desarrollo Web Backend — Taller 03
 * Nombre: Sharik Bonadiez Jimenez


/**
 * Punto 1
 
 */
function desglosarString(str, tipo) {
  if (typeof str !== "string" || typeof tipo !== "string") {
    throw new Error('Parámetros inválidos: se esperan (string, "vocales"|"consonantes").');
  }

  const limpio = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const vocales = new Set(["a","e","i","o","u"]);
  let v = 0, c = 0;

  for (const ch of limpio) {
    if (/[a-z]/.test(ch)) {
      if (vocales.has(ch)) v++; else c++;
    }
  }

  if (tipo.toLowerCase() === "vocales") return v;
  if (tipo.toLowerCase() === "consonantes") return c;
  throw new Error('El segundo parámetro debe ser "vocales" o "consonantes".');
}

/**
 * Punto 2
 */
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i);
  }
  return null;
}

/**
 * Punto 3

 */
function conversionRomana(s) {
  if (typeof s !== "string" || s.length === 0) {
    throw new Error("Se requiere una cadena con cifras romanas.");
  }

  const valores = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0;
  const up = s.toUpperCase();

  for (let i=0;i<up.length;i++) {
    const curr = valores[up[i]];
    if (!curr) throw new Error(`Símbolo romano inválido: '${up[i]}'`);
    const next = valores[up[i+1]] || 0;
    if (curr < next) total -= curr; else total += curr;
  }
  return total;
}

/**
 * Punto 4
 */
function descomposicion(entrada) {
  if (typeof entrada !== "string" || entrada.trim() === "") {
    throw new Error("Entrada inválida: se espera 'palabra,op1,op2,...'");
  }

  const partes = entrada.split(",").map(x => x.trim()).filter(Boolean);
  const objetivo = partes[0];
  const dic = partes.slice(1);
  const set = new Set(dic);

  for (const w1 of dic) {
    if (objetivo.startsWith(w1)) {
      const w2 = objetivo.slice(w1.length);
      if (set.has(w2)) return [w1,w2];
    }
  }
  return null;
}

// ==== Pruebas rápidas ====
if (require.main === module) {
  console.log("== Punto 1 ==");
  console.log(desglosarString("murcielagos","vocales"));       // 5
  console.log(desglosarString("murcielagos","consonantes"));   // 6

  console.log("\n== Punto 2 ==");
  console.log(twoSum([2,7,11,15],9));    // [0,1]
  console.log(twoSum([3,4,2],6));        // [1,2]

  console.log("\n== Punto 3 ==");
  console.log(conversionRomana("III"));       // 3
  console.log(conversionRomana("XIV"));       // 14
  console.log(conversionRomana("MMXXIV"));    // 2024
  console.log(conversionRomana("MCMXCVII"));  // 1997

  console.log("\n== Punto 4 ==");

console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu")); // ["mal","humor"]
}