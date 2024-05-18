function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let qsy = 1

  while (qsy < numero) {
    qsy *= 2
    if(qsy === numero){return true}
  }
  return false;
}

module.exports = esPotenciaDeDos;
