// TITULO DEL PROGRAMA
console.log("EN ESTE PROGRAMA CALCULARAS EL AREA DE TU RECTANGULO")
console.log()
// ASOCIAMOS READLINESYNC AL LECTOR
import * as readlinesync from 'readline-sync'
/* En los pasos debajo, preguntamos al usuario la base del rectangulo y su altura para poder calcular el area */
console.log("INSERTE LA DISTANCIA DE LA BASE, expresado en CM") 
let distanciaDeLaBase = readlinesync.question()
console.log("La base del rectangulo es de " + distanciaDeLaBase + " CM")
console.log("Ahora, inserte la altura de dicho rectangulo, expresado en CM")
let alturaDeLaBase = readlinesync.question()
console.log("Sabiendo que la base es de "+ distanciaDeLaBase + "CM" + " y la altura es de "  + alturaDeLaBase + "CM, podemos decir que la base es de " + alturaDeLaBase*distanciaDeLaBase+ "CM^2")
