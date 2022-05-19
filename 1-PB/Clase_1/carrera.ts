console.log("EN ESTE PROGRAMA SE INSERTARAN TODOS LOS TIEMPOS POR VUELTA")
// Aqui le decimos al programa que utilice el dato de entrada RLS//
import * as readlinesync from 'readline-sync'
// Le pedimos al piloto que muestre sus tiempos por cada vuelta//
console.log("INSERTE AQUI EL TIEMPO DE LA PRIMERA VUELTA")
let vuelta1 : number = readlinesync.questionFloat()
console.log("La primera vuelta fue de " + vuelta1 + " segundos")
console.log("INSERTE AQUI EL TIEMPO DE LA SEGUNDA VUELTA")
let vuelta2 : number = readlinesync.questionFloat()
console.log("La segunda vuelta fue de " + vuelta2 + " segundos")
console.log("INSERTE AQUI EL TIEMPO DE LA TERCERA VUELTA")
let vuelta3 : number = readlinesync.questionFloat()
console.log("La tercera vuelta fue de " + vuelta3 + " segundos")
console.log("INSERTE AQUI EL TIEMPO DE LA CUARTA VUELTA")
let vuelta4 : number = readlinesync.questionFloat()
console.log("La cuarta vuelta fue de " + vuelta4 + " segundos")
// Aqui le mostramos al piloto cuales fueron sus tiempos por cada vuelta especifica//
console.log("LAS VUELTAS FUERON DE: ")
console.log('1. ' + vuelta1 + ' segundos.')
console.log('2. '+ vuelta2 + ' segundos.')
console.log('3. ' + vuelta3 + ' segundos.')
console.log('4. ' + vuelta4 + ' segundos.')
// En este paso le mostramos el tiempo total, y su promedio//
let suma : number = (vuelta1 + vuelta2 + vuelta3 + vuelta4)
console.log("El tiempo promedio de la carrera fue de " + suma/4 + " segundos.")
console.log("El tiempo TOTAL de la carrera fue de " + suma + " segundos.")
