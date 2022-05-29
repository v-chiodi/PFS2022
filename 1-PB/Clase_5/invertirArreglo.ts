import * as readlinesync from 'readline-sync'


let nArreglo : number = readlinesync.questionInt ("INGRESE LA DIMENSION DE SU ARREGLO: " )
let arreglo1 : number [] = new Array (nArreglo)
let arregloInvertido : number [] = new Array


let contador = 0
for (contador=0;contador < nArreglo;contador++){
     arreglo1 [contador] = readlinesync.questionFloat("INGRESE LOS VALORES DEL ARREGLO: ");
    arregloInvertido [nArreglo-1-contador]=arreglo1[contador]
}
console.log("Los valores del arreglo son: " + (arreglo1) + " a la inversa, seria: " + (arregloInvertido));
