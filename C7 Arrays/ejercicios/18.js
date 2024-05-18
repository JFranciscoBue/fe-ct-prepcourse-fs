function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let cantidadNotas = resultadosTest.length;
  let sumaDeNotas = 0;
  for(let i= 0; i< cantidadNotas; i++){
    sumaDeNotas += resultadosTest[i]
  }

  return sumaDeNotas / cantidadNotas;
  


}

module.exports = promedioResultadosTest;
