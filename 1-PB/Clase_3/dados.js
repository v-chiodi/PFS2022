"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
console.log("BUENOS DIAS, INGRESE LA CANT DE DADOS");
var cantidad = readlinesync.questionInt();
var denominador = (Math.pow(6, cantidad));
var probabilidad = (1 / denominador);
console.log("LAS PROBABILIDADES DE SACAR TODOS LOS DADOS IGUALES ES DE: " + probabilidad);
