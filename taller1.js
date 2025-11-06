 //punto 1
 function convertidorTemp(celsius) {
  return celsius * 9 / 5 + 32;
}

console.log(convertidorTemp(0));  


//punto2

  const disc = b * b - 4 * a * c;
  if (disc < 0) return NaN; 
  const raiz = Math.sqrt(disc);
  if (signo === '+') {
    return (-b + raiz) / (2 * a);
  } else {
    return (-b - raiz) / (2 * a);
  }
console.log(resolvedor(1, 5, 4, '+')); 
console.log(resolvedor(1, 5, 4, '-')); 

//problema 3 

function mejorParidad(numero) {
  return numero % 2 === 0;
  }
  console.log(mejorParidad(4)); 

//problema 4
function peorParidad(n) {
  if (n === 0) {
      return "par";
  } else if (n === 1) {
      return "impar";
  } else if (n === 2) {
      return "par";
  } else if (n === 3) {
      return "impar";
  } else if (n === 4) {
      return "par";
  } else if (n === 5) {
      return "impar";
  } else if (n === 6) {
      return "par";
  } else if (n === 7) {
      return "impar";
  } else if (n === 8) {
      return "par";
  } else if (n === 9) {
      return "impar";
  } else if (n === 10) {
      return "par";
  } else {
      return "fuera de rango";
  }
}


