// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
  // Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  return array.pop();
  // Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  return array.length;
  // Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1;
  }

  return nuevoArray;
  //var nuevaArray = [];
  //for(var i = 0 <array.length; i++);{
  //  nuevaArray[i] = array[i] +1;
 // }
 // return nuevaArray;
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;

  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}

function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}

function arrayContiene(array, elemento) {

//return array.includes(elemento);

  for(var i = 0; i < array.length; i++){
    if(array [i] === elemento){
      return true;
    }
  }
  return false;
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma;

}

function promedioResultadosTest(resultadosTest) {
  var total= agregarNumeros(resultadosTest);
  return total / resultadosTest.length;
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {
  var max = numeros[0];
  for(var i = 1; i <numeros.length; i++) {
    if(numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function multiplicarArgumentos() {
  if(arguments.length === 0){
    return 0;
  }
  var total = 1;
  for(var i = 0; i < arguments.length; i++){
    total = total * arguments[i];
  }
  {
    return total;
  }
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
