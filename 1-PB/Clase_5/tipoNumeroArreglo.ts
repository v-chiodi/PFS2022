import * as readlinesync from "readline-sync"
let dimension : number = readlinesync.questionInt("INGRESE LA DIMENSION DEL ARREGLO: ")
let indice : number
let arreglo : number [] = new Array (dimension)



for (indice = 0; indice <dimension; indice++){
    arreglo[indice]= readlinesync.questionInt("Ingrese los valores del arreglo/ vector: ", indice )
}

let numPos:number= 0
let numNeg : number= 0 
let cero: number = 0

for (indice= 0 ; indice < dimension; indice++){
    if (arreglo[indice]>0){
        numPos++;
    } else if (arreglo[indice]<0){
        numNeg++;
    } else  {
        cero++;
    }
        
    }

console.log("LOS TIPOS DE NUMEROS DEL VECTOR FUERON: " + numPos + " POSITIVOS, " + numNeg + " NEGATIVOS, Y " + cero + " = a CERO.");
