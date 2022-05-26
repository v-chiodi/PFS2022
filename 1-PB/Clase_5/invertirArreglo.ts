import * as readlinesync from 'readline-sync'
let nArreglo : number = readlinesync.questionInt ("INGRESE LA DIMENSION DE SU ARREGLO: " )
let arreglo1 []: number = new Array (nArreglo)
let contador = 0
for (contador=0;contador=nArreglo;contador++){
    let nArreglo = readlinesync.questionFloat("INGRESE LOS VALORES DEL ARREGLO")
}
console.log("Los valores del arreglo son: " + arreglo1 + " a la inversa, seria: " + (arreglo1));
