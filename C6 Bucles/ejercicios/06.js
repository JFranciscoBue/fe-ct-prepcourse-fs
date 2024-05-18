function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  var digitos = num.toString()
  return digitos.length === 3;

}

let qsy = 123
console.log(qsy.toString())

console.log(tieneTresDigitos(232))
module.exports = tieneTresDigitos;
