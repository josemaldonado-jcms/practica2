function desplegarResultadosFibonacci(terminos:number, sumaTerminos:number ): void{
    console.log(`La suma de los ${terminos} primeros terminos pares  de la serie de fibonacci es: ${sumaTerminos}`);
    document.write(`La suma de los ${terminos} primeros terminos pares de la serie de fibonacci es: ${sumaTerminos}`);

}
function secuenciaFibonacci(numeroTerminos: number):Array<number>{
    let primerTermino: number = 1;
    let segundotermino: number =2;
    let arraySecuenciaFibonacci: Array<number>=[1,2];
    let contador: number =2;
    while(numeroTerminos>0){
        arraySecuenciaFibonacci[contador]=primerTermino+segundotermino;
        primerTermino=segundotermino;
        segundotermino=arraySecuenciaFibonacci[contador];
        contador++;
        numeroTerminos--;
    }

    return arraySecuenciaFibonacci; 
}
function sumaDeParesFibonacci(numeroTernimos: number): void{
let arrayFibonacci: Array<number>=[0];
let contador: number=0;
let sumaTotal: number=0, terminos: number=numeroTernimos;
arrayFibonacci=secuenciaFibonacci(numeroTernimos);
while(numeroTernimos>0){
    if(arrayFibonacci[contador]%2 === 0){
        sumaTotal=sumaTotal+arrayFibonacci[contador];
           }
    contador++;
    numeroTernimos--;
}
desplegarResultadosFibonacci(terminos, sumaTotal);

}
sumaDeParesFibonacci(11);
