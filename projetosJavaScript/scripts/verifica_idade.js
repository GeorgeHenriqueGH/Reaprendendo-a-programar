var nota = Number(window.prompt("Digite uma nota"))

while(nota < 0 || nota > 10) {
    nota = Number(window.prompt("Digite novamente:"))
}

window.alert(`Sua nota é ${nota}`);

const content = window.document.getElementById("content");

content.innerHTML = `Sua nota é ${nota}`;