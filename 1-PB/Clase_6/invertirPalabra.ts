import * as readlinesync from 'readline-sync'

let palabra: string = readlinesync.question("Ingrese su palabra a invertir: " )
let cantidadLetras : number = palabra.length
let invertirPalabra : string

    let indice:number;
    for (indice = cantidadLetras-1; indice>= 0; indice--){
        console.log(palabra[indice])
        invertirPalabra = [cantidadLetras-1-indice]=palabra[indice]
    }


console.log("Su palabra es " + palabra + ", de modo invertido es: " + (invertirPalabra));

