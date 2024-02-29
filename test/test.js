// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función suma', function() {
	assert.equal(operaciones.suma(1,3), 4);
	assert.equal(operaciones.suma(-1,3), 2);
	assert.equal(operaciones.suma(8,-3), 5);
});


// Test
it('comprobar función espar', function() {
	assert.equal(operaciones.espar(22), 1);
	assert.equal(operaciones.espar(5), 0);
	assert.equal(operaciones.espar(-11), 0);
});
