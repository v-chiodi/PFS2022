//LE INFORMAMOS EL PROGRAMA AL USUARIO//
console.log("AL INGRESAR 3 NUMEROS, EL SISTEMA LE DIRA CUAL DE LOS 3 ES EL MAS GRANDE")

//IMPORTAMOS RLS//
import*as readlinsync from 'readline-sync'

//LE PEDIMOS AL USUARIO QUE INGRESE LOS NUMEROS, Y LE MOSTRAMOS LO QUE INGRESÓ//
console.log("INGRESE EL PRIMER NUMERO")
let number1 : number = readlinsync.questionFloat()
console.log ("El PRIMER numero ingresado fue: " + number1)
console.log("INGRESE EL SEGUNDO NUMERO")
let number2 : number = readlinsync.questionFloat()
console.log ("El SEGUNDO numero ingresado fue: " + number2)
console.log("INGRESE EL TERCER Y ULTIMO NUMERO")
let number3 : number = readlinsync.questionFloat()
console.log ("El ULTIMO numero ingresado fue: " + number3)

//LE DECIMMOS AL PROGRAMA QUE SI EL NUMERO 1 FUE EL MAS GRANDE LO MENCIONE, QUE SI EL MAS GRANDE FUE EL NRO 2 LO MENCIONE, Y QUE SINO MENCIONA EL NUMERO 3//
    if (number1>number2&&number1>number3){
        console.log("El numero mas grande fue el " + number1);
            } 
                else if (number2>number3&&number2>number1) {
                console.log("El numero mas grande fue el " + number2) ;
                } else 
                        console.log("El numero mas grande fue el " + number3);
                



                