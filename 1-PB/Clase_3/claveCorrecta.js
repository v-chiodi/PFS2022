"use strict";
exports.__esModule = true;
var readlinesync = require("readline-sync");
console.log("BIENVENIDOS AL PROGRAMA");
var clave;
var contador = 0;
var intento = 1;
while (contador < 3) {
    clave = readlinesync.question();
    if (clave == "eureka") {
        break;
    }
    else
        (clave != "eureka");
    contador = contador + 1;
    intento = intento + 1;
    console.log("SU CLAVE ES INCORRECTA, INTENTE DE NUEVO");
}
if (contador == 3) {
    console.log("SUS CLAVES FUERON INCORRECTAS, INTENTE MAS TARDE");
}
