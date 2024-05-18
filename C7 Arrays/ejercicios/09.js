function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var longitud = array.length;
   var indiceAleatorio = Math.floor(Math.random() * longitud); // Genera un índice aleatorio dentro del rango de índices válidos del arreglo
   return array[indiceAleatorio]; //
}

module.exports = obtenerElementoAleatorio;
