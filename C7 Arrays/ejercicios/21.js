function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let arreglo = [];
  for(let i= 0; i< array.length; i++){
    if(array[i] === "Enero"){arreglo.push(array[i])}
    else if(array[i] === "Marzo"){arreglo.push(array[i])}
    else if(array[i] === "Noviembre"){arreglo.push(array[i])}
  }
  if(arreglo.length !== 3){return "No se encontraron los meses pedidos"}
  else return arreglo;

}

module.exports = mesesDelAño;
