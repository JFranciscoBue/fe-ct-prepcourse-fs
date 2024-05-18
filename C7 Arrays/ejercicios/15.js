function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let indiceMayor = 0; // Suponemos que el primer elemento es el mayor
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i; // Actualizamos el índice del mayor encontrado
    }
  }
  return indiceMayor;
  }


console.log(encontrarIndiceMayor([2,3,7]))

module.exports = encontrarIndiceMayor;
