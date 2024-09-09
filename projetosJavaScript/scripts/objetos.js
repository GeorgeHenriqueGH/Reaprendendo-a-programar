// Objetos no JavaScript nada mas são que arrays em outras linguagens de programação.

// Exemplos
const homemAranha = { 
    nome: "Peter Parker",
    anoNascimento: 1969,
    poderes: true
};

console.log(homemAranha);

const nome = "Capitão Itulino", idade = 21, arma = "Comunicações", cursoFormacao = "CFC", cursoEspecializacao = "Comandos";

const militar = {
    nome: nome,
    idade: idade,
    arma: arma,
    curso: {
        formacao: cursoFormacao,
        especializacao: cursoEspecializacao 
    }
}

console.warn(militar);
