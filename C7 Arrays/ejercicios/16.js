function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var arreglo = []
  for(var i= 0; i< array.length; i++){
    arreglo.push(array[i] * i);
  }
  return arreglo;

}

console.log(multiplicarElementosPorIndice([3,4,8]))


module.exports = multiplicarElementosPorIndice;
