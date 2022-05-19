import * as readlinesync from 'readline-sync'
console.log("BUENOS DIAS, INGRESE SU NUMERO ")
let numero : number = readlinesync.questionInt()


while (0 == numero) {numero=readlinesync.questionInt("SU NUMERO ES INCORRECTO, INGRESE OTRO NUMERO DISTINTO DE 0: ")

}if  (0 == numero % 2) console.log("SU NUMERO ES PAR")
      else (console.log("SU NUMERO ES IMPAR"))
