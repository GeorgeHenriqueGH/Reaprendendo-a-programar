var x = 500;

while (x != 1000) {
    console.log(`  `);
    x++;
}

const nome = "Capitão Itulino", idade = 21, arma = "Comunicações", cursoFormacao = "CFC", cursoEspecializacao = "Comandos";


const militar = [{
    nome: nome,
    idade: idade,
    arma: arma,
    curso: {
        formacao: cursoFormacao,
        especializacao: cursoEspecializacao 
    },
}]

y = 0;

while (y < militar.length) {
    console.log(militar[y]);
    y++;
}