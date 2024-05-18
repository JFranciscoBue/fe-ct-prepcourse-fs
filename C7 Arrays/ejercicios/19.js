function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  // Verificar si no se pasaron argumentos
  if (arguments.length === 0) {
    return 0;
  }
  
  // Si solo se pasó un argumento, retornarlo
  if (arguments.length === 1) {
    return arguments[0];
  }
  
  // Inicializar el producto en 1
  let producto = 1;
  
  // Iterar sobre los argumentos y multiplicarlos
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  
  // Retornar el producto
  return producto;

}

module.exports = multiplicarArgumentos;
