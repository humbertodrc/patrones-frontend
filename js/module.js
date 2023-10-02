/**
 * Ejemplo del patron de diseño module
 * El modulo es una funcion que se autoejecuta y devuelve un objeto con las propiedades y metodos que queremos que sean publicos
 */

const saludar = (function () {
  // console.log('Hola desde el modulo');
  let mensaje = 'Hola desde el modulo'

  return {
    message: function (nombre) {
      console.log(`${mensaje} ${nombre}`);
    }
  }
})()

// saludar.message()
// saludar.message('Juan')
saludar.message('Pedro')
