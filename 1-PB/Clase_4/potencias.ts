import* as readlinesync from 'readline-sync'
console.log("EN ESTE PROGRAMA, AL INGRESAR EL NUMERO DE LA BASE, Y EL NNUMERO DE LA POTENCIA, HALLARAS EL RESULTADO")

let number1 : number = readlinesync.questionInt ('Ingrese el numero de la base')
console.log("EL NUMERO DE LA BASE INGRESADO FUE " + number1)
let number2 : number = readlinesync.questionInt('Ingrese el numero del exponente, este debe ser 0 =<')
console.log("EL EXP ES "+ number2)

let RESULTADO:number = number1**number2
console.log ("EL RESULTADO ES " + RESULTADO) 