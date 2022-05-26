"use strict";
/*• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
exports.__esModule = true;
var readlinesync = require("readline-sync");
var vectorUno = new Array(6);
var vectorDos = new Array(6);
var arregloSuma = new Array(6);
var i = 0;
for (i; i < 6; i++) {
    vectorUno[i] = readlinesync.questionInt("Ingrese para el 'Vector Uno' un valor para la posicion " + i + " :");
    vectorDos[i] = readlinesync.questionInt("Ingrese para el 'Vector Dos' un valor para la posicion " + i + " :");
    arregloSuma[i] = vectorUno[i] + vectorDos[i];
}
console.log("La suma de los elementos en cada posicion nos almacena los elementos: ", arregloSuma);
