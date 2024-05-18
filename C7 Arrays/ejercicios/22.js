function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tablaSeisJeje = [];
  for(let i= 0; i<= 10; i++){
    let resultado = 6 * i
    tablaSeisJeje.push(resultado);
  }
  return tablaSeisJeje;
  
}

module.exports = tablaDelSeis;
