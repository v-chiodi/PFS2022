"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
console.log("BUENOS DIAS, INGRESE SU NUMERO ");
var numero = readlinesync.questionInt();
while (0 == numero) {
    numero = readlinesync.questionInt("SU NUMERO ES INCORRECTO, INGRESE OTRO NUMERO DISTINTO DE 0: ");
}
if (0 == numero % 2)
    console.log("SU NUMERO ES PAR");
else
    (console.log("SU NUMERO ES IMPAR"));
