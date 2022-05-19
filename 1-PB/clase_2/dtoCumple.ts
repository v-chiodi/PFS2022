
console.log("MUCHAS GRACIAS POR COMPRAR EN NUESTRA TIENDA") // SALUDO DEL PROGRAMA//
import * as readlinesync from 'readline-sync' //IMPORTAMOS RLS//

//LE PEDIMOS AL USUARIO QUE INGRESE SU MES DE CUMPLEAÑOS//
console.log("INGRESE SU MES DE CUMPLEAÑOS (1-12)")
let fechacumple : number  = readlinesync.questionInt()

//LE DEVOLVEMOS AL USUARIO EL VALOR INGRESADO//
console.log("USTED CUMPLE EN EL MES " + fechacumple)

//LE PEDIMOS AL USUARIO QUE INGRESE LA CANTIDAD Y EL PRECIO POR UNIDAD//
console.log("INGRESE LAS CANTIDAD DE UNIDADES COMPRADAS (un) ")
let cantidad : number = readlinesync.questionInt()
console.log("INGRESE EL PRECIO DE CADA UNIDAD ($/un) ")
let precio : number = readlinesync.questionFloat()

//LE DEVOLVEMOS AL USUARIO LO QUE INGRESÓ PREVIAMENTE//
console.log("Usted compro " + cantidad + " productos en la tienda, a un valor de ($) " + precio + " cada un.")
let total = cantidad*precio

//LE INFORMAMOS EL TOTAL, Y SI SU CUMPLEAÑOS ES EN OCTUBRE LE DAMOS SU DTO.//
console.log("EL TOTAL A PAGAR ES DE: " + cantidad*precio)
if (fechacumple == 10) 
    console.log("PERO, USTED TENDRA UN 15% de DTO SOBRE SU COMPRA POR CUMPLIR AÑOS EN EL MES DE OCTUBRE, POR LO QUE DEBERA PAGAR SOLAMENTE ($) " + total*0.85)
    
