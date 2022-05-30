import * as readlinesync from 'readline-sync'

let palabra: string = readlinesync.question("Ingrese su palabra a invertir: " )
let palabraInvertida : string = "";

for (let i = palabra.length-1; i>=0; i--) {
    palabraInvertida+=palabra[i]
}



console.log("Su palabra es " + palabra + ", de modo invertido es: " + palabraInvertida);

