const livro = [
    {
        titulo: "Conan o bárbaro",
        autor:  "Robert E. Haword",
        paginas: 360
    },
    {
        titulo: "Eu sou a lenda",
        autor:  "Richard Matheson",
        paginas: 381
    },
    {
        titulo: "Frankenstein",
        autor:  "Mary Shelley",
        paginas: 210
    }
];

var conta = 0;

while(conta < livro.length) {
    console.log(`Esse é o autor: ${livro[conta].autor}`);
    console.log(`\nSeu livro de maior sucesso: ${livro[conta].titulo}\n`);
    console.log(`\nO número de página dele: ${livro[conta].paginas}\n`);
    console.log("[=========================##==========================]")
    conta++;
}
