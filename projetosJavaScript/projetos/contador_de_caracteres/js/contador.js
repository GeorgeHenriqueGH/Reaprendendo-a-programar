const inputCaracter = window.document.querySelector("#inputCaracter");
const counter = window.document.querySelector("#counter");

let contagem = 0;

inputCaracter.addEventListener("input", () => {
    let count = 0;
    count = inputCaracter.value.length;
    counter.textContent = `Número de caracteres: ${count}`
});