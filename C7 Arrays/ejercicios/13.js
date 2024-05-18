function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let arregloPares = [];
  for(let i= 0; i< array.length; i++){
    if(array[i] % 2 === 0){arregloPares.push(array[i])}
  }
  return arregloPares;
}

console.log(filtrarNumerosPares([5,6,8,7,11]))

module.exports = filtrarNumerosPares;
