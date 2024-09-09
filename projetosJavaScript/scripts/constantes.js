// Uma constante (const) é uma variável que só contém um dado não podendo ser repor do dado.

const nome = "Loine Druid"; //Exemplo não pode ter seus dados mudados

//nome = "Spectre";
console.log("Exemplo 01\n", nome);

/* Exemplo de erro:
 * nome = "Spectre";
     ^
TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/henrique/aprendendo-tudo-de-novo/projetosJavaScript/scripts/constantes.js:5:6)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
 * */

const idade = 1 + 20;
console.log("Exemplo 02\n", idade);

// Constantes também são bastante utilizadas para armazenar funções ou objetos.

const alerta = () =>{

    for(let i = 0; i != 9; i++) {
        console.warn("Comunicações Barão!!");
    }

}

alerta();
