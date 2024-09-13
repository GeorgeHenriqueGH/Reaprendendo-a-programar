var nome = window.prompt("Digite seu nome");
var senha = window.prompt("Digite sua senha");

while (nome == senha) {
    window.alert("Tente novamente.")
    nome = window.prompt("Digite seu nome");
    senha = window.prompt("Digite sua senha");
}

const content = window.document.getElementById("content");

content.innerHTML = `<p>Usuario: <mark>${nome}</mark><br/>Sua senha: <mark>${senha}</mark></p>`;