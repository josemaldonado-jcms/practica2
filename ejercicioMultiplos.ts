function desplegarResultadoMultiplo(resultado: number, numeroReferencia: number): void{
console.log(`el resultado de la Suma de multiplos menores a ${numeroReferencia} 
de 5 y 3 es:  ${resultado}`);
document.write(`el resultado de la Suma de multiplos menores a ${numeroReferencia} 
de 5 y 3 es:  ${resultado}`);
}

function sacarMultiplos(base: number, contador: number):number {
    return base*contador;

}

function calcularMultiplos(base1: number, base2:number, numeroReferencia:number): void{
    let contador: number =1, auxiliar1: number=0, auxiliar2:number=0;
    let bandera1:number=0,bandera2: number=0;
    let sumaBase1: Array <number> = [0];
    let sumaBase2: Array <number>= [0];
    let sumaTotal: number=0;
  
    while(bandera1<1 || bandera2<1){
        auxiliar1=sacarMultiplos(base1, contador);
        if(auxiliar1 < numeroReferencia){
            sumaBase1[contador-1]=auxiliar1;
            sumaTotal =sumaTotal+auxiliar1;
        }
        else{bandera1=1;}
        auxiliar2=sacarMultiplos(base2, contador);
        if(auxiliar2 < numeroReferencia){
            sumaBase2[contador-1]=auxiliar2;
            sumaTotal=sumaTotal+auxiliar2
        }
        else{bandera2=1;}
       contador++;
    }

    desplegarResultadoMultiplo(sumaTotal,numeroReferencia);
}
calcularMultiplos(3,5,1000);