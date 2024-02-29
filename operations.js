/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function suma (a, b) {
	return a - b;	
};

/* Función espar */
var espar = function espar (a) {
	if ((a%2) == 0) {
		return 1;
	} else
	{
		return 0;
	};

};


/* Exportación de funciones */
module.exports = {
	suma,
	resta,
	espar

}

