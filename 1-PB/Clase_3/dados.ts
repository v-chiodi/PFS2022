import * as readlinesync from 'readline-sync'
console.log("BUENOS DIAS, INGRESE LA CANT DE DADOS")
let cantidad : number = readlinesync.questionInt()
let denominador = (6**cantidad)
let probabilidad = (1/denominador)
console.log ("LAS PROBABILIDADES DE SACAR TODOS LOS DADOS IGUALES ES DE: " + probabilidad )