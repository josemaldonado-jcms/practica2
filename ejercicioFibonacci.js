"use strict";
function desplegarResultadosFibonacci(terminos, sumaTerminos) {
    console.log("La suma de los " + terminos + " primeros terminos pares  de la serie de fibonacci es: " + sumaTerminos);
    document.write("La suma de los " + terminos + " primeros terminos pares de la serie de fibonacci es: " + sumaTerminos);
}
function secuenciaFibonacci(numeroTerminos) {
    var primerTermino = 1;
    var segundotermino = 2;
    var arraySecuenciaFibonacci = [1, 2];
    var contador = 2;
    while (numeroTerminos > 0) {
        arraySecuenciaFibonacci[contador] = primerTermino + segundotermino;
        primerTermino = segundotermino;
        segundotermino = arraySecuenciaFibonacci[contador];
        contador++;
        numeroTerminos--;
    }
    return arraySecuenciaFibonacci;
}
function sumaDeParesFibonacci(numeroTernimos) {
    var arrayFibonacci = [0];
    var contador = 0;
    var sumaTotal = 0, terminos = numeroTernimos;
    arrayFibonacci = secuenciaFibonacci(numeroTernimos);
    while (numeroTernimos > 0) {
        if (arrayFibonacci[contador] % 2 === 0) {
            sumaTotal = sumaTotal + arrayFibonacci[contador];
        }
        contador++;
        numeroTernimos--;
    }
    desplegarResultadosFibonacci(terminos, sumaTotal);
}
sumaDeParesFibonacci(11);
