console.log("En este programa, al cargar los datos, se detallara el precio final de un producto o la compra de varios")
import*as readlinesync from 'readline-sync'
console.log("Ingrese la cantidad de productos obtenidos")
let cantidad : number = readlinesync.questionFloat()
console.log("Perfecto, usted ha adquirido " + cantidad + " productos")
console.log("Ahora, ingrese el valor por unidad de dicho producto")
let precio : number = readlinesync.questionFloat()
console.log("El precio de cada producto, es de: " + precio + " pesos")
let totalGasto : number = cantidad*precio
if (totalGasto>=1000) {
    console.log("Como su cuenta pagar es mayor a los 1000 pesos, se aplico un descuento del 10%, por lo que el total a pagar final, es de $" + totalGasto*0.9)
} else {console.log("El total es de $"+ totalGasto)}
