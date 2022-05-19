"use strict";
exports.__esModule = true;
console.log("EN ESTE PROGRAMA SE INSERTARAN TODOS LOS TIEMPOS POR VUELTA");
// Aqui le decimos al programa que utilice el dato de entrada RLS//
var readlinesync = require("readline-sync");
// Le pedimos al piloto que muestre sus tiempos por cada vuelta//
console.log("INSERTE AQUI EL TIEMPO DE LA PRIMERA VUELTA");
var vuelta1 = readlinesync.questionFloat();
console.log("La primera vuelta fue de " + vuelta1 + " segundos");
console.log("INSERTE AQUI EL TIEMPO DE LA SEGUNDA VUELTA");
var vuelta2 = readlinesync.questionFloat();
console.log("La segunda vuelta fue de " + vuelta2 + " segundos");
console.log("INSERTE AQUI EL TIEMPO DE LA TERCERA VUELTA");
var vuelta3 = readlinesync.questionFloat();
console.log("La tercera vuelta fue de " + vuelta3 + " segundos");
console.log("INSERTE AQUI EL TIEMPO DE LA CUARTA VUELTA");
var vuelta4 = readlinesync.questionFloat();
console.log("La cuarta vuelta fue de " + vuelta4 + " segundos");
// Aqui le mostramos al piloto cuales fueron sus tiempos por cada vuelta especifica//
console.log("LAS VUELTAS FUERON DE: ");
console.log('1. ' + vuelta1 + ' segundos.');
console.log('2. ' + vuelta2 + ' segundos.');
console.log('3. ' + vuelta3 + ' segundos.');
console.log('4. ' + vuelta4 + ' segundos.');
// En este paso le mostramos el tiempo total, y su promedio//
var suma = (vuelta1 + vuelta2 + vuelta3 + vuelta4);
console.log("El tiempo promedio de la carrera fue de " + suma / 4 + " segundos.");
console.log("El tiempo TOTAL de la carrera fue de " + suma + " segundos.");
