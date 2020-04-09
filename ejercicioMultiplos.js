"use strict";
function desplegarResultadoMultiplo(resultado, numeroReferencia) {
    console.log("el resultado de la Suma de multiplos menores a " + numeroReferencia + " \nde 5 y 3 es:  " + resultado);
    document.write("el resultado de la Suma de multiplos menores a " + numeroReferencia + " \nde 5 y 3 es:  " + resultado);
}
function sacarMultiplos(base, contador) {
    return base * contador;
}
function calcularMultiplos(base1, base2, numeroReferencia) {
    var contador = 1, auxiliar1 = 0, auxiliar2 = 0;
    var bandera1 = 0, bandera2 = 0;
    var sumaBase1 = [0];
    var sumaBase2 = [0];
    var sumaTotal = 0;
    while (bandera1 < 1 || bandera2 < 1) {
        auxiliar1 = sacarMultiplos(base1, contador);
        if (auxiliar1 < numeroReferencia) {
            sumaBase1[contador - 1] = auxiliar1;
            sumaTotal = sumaTotal + auxiliar1;
        }
        else {
            bandera1 = 1;
        }
        auxiliar2 = sacarMultiplos(base2, contador);
        if (auxiliar2 < numeroReferencia) {
            sumaBase2[contador - 1] = auxiliar2;
            sumaTotal = sumaTotal + auxiliar2;
        }
        else {
            bandera2 = 1;
        }
        contador++;
    }
    desplegarResultadoMultiplo(sumaTotal, numeroReferencia);
}
calcularMultiplos(3, 5, 1000);
