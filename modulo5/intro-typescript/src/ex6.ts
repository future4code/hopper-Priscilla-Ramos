function operacoes (num1:number, num2: number): void {
    let maior: number;
    let menor: number;

    if (num1 > num2){
        maior = num1;
        menor = num2
    } else {
        maior = num2;
        menor = num1
    };

    console.log(`A soma é ${num1 + num2}`);  
    console.log(`A subtração é ${maior - menor}`);
    console.log(`A multiplicação é ${num1 * num2}`);
    console.log(`O número maior é ${maior}`);
}

operacoes(2, 3)