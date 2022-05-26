import * as readlinesync from 'readline-sync'

let arreglo1: number [ ] = new Array (6)
let arreglo2: number [ ] = new Array (6)
let sumaArreglos: number [ ] = new Array (6) 

let contador=0
for (contador = 0; contador < 6 ; contador++) {
    arreglo1 = readlinesync.questionInt("Ingrese su numero para su arreglo NUMERO 1 (UNO), que estara en la posicion " + contador + ": ")
    arreglo2 = readlinesync.questionInt("Ingrese su numero para su arreglo NUMERO 2 (DOS), que estara en la posicion " + contador + ": ")
    sumaArreglos[contador] = arreglo1[contador] + arreglo2[contador]   
}

console.log("La suma de los numeros de cada arreglo (separado por posicion) es " , sumaArreglos);
