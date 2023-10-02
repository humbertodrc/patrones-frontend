/**
 * Ejemplo de un modulo
 * 
 */
const printMessage = (() => {
	return {
		print: (message) => {
			console.log(message);
		},
	};
})();

/**
 * Ejemplo de un modulo
 */
const alertMessage = (() => {
  return {
    print: (message) => {
      alert(message);
    },
  };
})();

/**
 * Ejemplo del patron de diseño module
 * El modulo es una funcion que se autoejecuta y devuelve un objeto con las propiedades y metodos que queremos que sean publicos
 * @param {printer} printer
 * @returns
 * @autor Humberto
 */
const saludar = (function (printer) {
	// console.log('Hola desde el modulo');
	let mensaje = "Hola desde el modulo";

	function concatenarTexto(nombre) {
		return `${mensaje} ${nombre}`;
	}

	return {
		message: function (nombre) {
			let texto = concatenarTexto(nombre);
			printer.print(texto);
		},
	};
})(alertMessage);

saludar.message("Daniel");
