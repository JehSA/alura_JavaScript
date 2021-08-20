
// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}


console.log(soma(5, 2));
console.log(soma(-700, 1100));
console.log(soma(-5, -2));


function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Jefferson", 34));




function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(3, 4), soma(7, 15)));
console.log(multiplica(soma(3, 4)));
