//Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.
var n1Ex01, n2Ex01;

n1Ex01 = 50;
n2Ex01 = 59;

const resultEx01 = n1Ex01 + n2Ex01;

if (resultEx01 >= 100) {
    console.log(`Parabéns vc tem mais de ${resultEx01} pontos.`);
} else {
    console.log(`Você só tem ${resultEx01} pontos.`);
}

//Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.
function saude(dano, saude) {
    let resultado = 0;
    if(saude <= 0) {
        console.log(`O resultado é ${resultado = 1}.`);
    } else {
       console.log(`O dano é ${dano} e a vida é ${saude}.`);
    }
    return resultado;
}   
saude(0, 0);

//Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.
function limitaPosicao(limite) {
    if(limite < 0) { return 0; }
    if(limite > 100) { return 100; }
    return limite;
}
console.log(`O resultado é ${limitaPosicao(8)}.`);

//Faça um programa que leia três números e exiba o maior entre eles.
//Dica - Use uma série de comparações if para verificar qual número é o maior e, em seguida, exiba o resultado.
function encontraMaiorNumero(num1, num2, num3) {
    let maior = num1;
    if (maior < num2) {
        return num2;
    }
    if (maior < num3) {
        return num3;
    }
    return maior;
}
console.log(encontraMaiorNumero(23,45,21));

//Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.
const vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < vet.length; i++) {
    const element = vet[i];   
    console.log(element);
}