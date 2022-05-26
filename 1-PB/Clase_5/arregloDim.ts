import * as readlinesync from "readline-sync"
let num :  number [] = new Array (5);
num [0]= readlinesync.questionFloat("Ingrese el primer numero: ")
num [1]= readlinesync.questionFloat("Ingrese el segundo numero: ")
num [2]= readlinesync.questionFloat("Ingrese el tercer numero: ")
num [3]= readlinesync.questionFloat("Ingrese el cuarto numero: ")
num [4]= readlinesync.questionFloat("Ingrese el quinto numero: ")

console.log("El arreglo contiene a los numeros: "+ num)