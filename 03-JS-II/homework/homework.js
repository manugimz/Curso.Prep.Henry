// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
 // if(x >y) {return x};
  //return y;//variante 1
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
 /* if(x > y){
    return x
  };
  {
    if(x < y)
      return y;//variante 2
  }
  return x || y;*/
  return x > y? x : y;//variante 3 preferida
}

function saludo(idioma) {
 /* if(idioma === "aleman"){return "Guten Tag!"};
  if(idioma === "mandarin"){return "Ni Hao!"};
  if(idioma === "ingles"){return 'Hello!'};
  return 'Hola!';*/
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
 //return idioma == "aleman"? "Guten Tag!" : idioma == "mandarin"? "Ni Hao!" : idioma == "ingles"? "Hello!" : "Hola!"
 switch(idioma){
  case "aleman": 
  return"Guten Tag!"
  break;
  case "mandarin":
    return "Ni Hao!"
  break;
  case "ingles":
    return "Hello!"
  default: 
  return"Hola!"
} 
 //idioma === "mandarin"? "Ni Hao!" : "Hola!"
 //idioma === "ingles"? "Hello!" : "Hola!"
 
}

function esDiezOCinco(numero) {
 // if(numero === 10 || numero === 5){return true};
  //return false;
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    return numero === 10 || numero ===5? true : false;
}

function estaEnRango(numero) {
 // if(numero <50 && numero >20){return true};
 // return false;
 //return(numero <50 && numero >20);
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
 return numero < 50 && numero > 20? true : false;
}

function esEntero(numero) {
 // return(numero === Math.floor(numero));
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return numero % 1 === 0? true : false;
  
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 ===0){
    return "fizzbuzz"
  };
  if (numero % 3 === 0){
    return "fizz"
  };
  if (numero % 5 === 0)
  {return "buzz"
};
  return numero;
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

function esPrimo(numero) {
  if(numero === 1 || numero === 0){
    return false;
  }
  for(var i = 2; i < numero; i++)
  if(numero % i === 0) {
    return false;
  }
  return true;

  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
