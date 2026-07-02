

import readlineSync from 'readline-sync';


import elementos from '../funcao_elemento/funcao.js';
const emojs = [
    "🌍", "🧭", "🌹", "🌼",
    "🏵️", "🎀", "👗", "🎁",
    "🌍", "🧭", "🌹", "🌼",
    "🏵️", "🎀", "👗", "🎁"
];

let mostrar = Array(16).fill(false);

let erros = 0;
let pares = 0;

while(erros < 5) {

    console.clear();

    console.log("Pares encontrados:", pares);
    console.log("Erros:", erros);
    console.log();

    elementos(emojs, mostrar);

    let elemento1 = readlineSync.questionInt(
        "\nEscolhe o primeiro numero entre 1 e 16: "
    );

    mostrar[elemento1 - 1] = true;

        console.clear();
        elementos(emojs, mostrar);


    let elemento2 = readlineSync.questionInt(
        "Escolhe o segundo numero entre 1 e 16: "
    );

    mostrar[elemento2 - 1] = true;

    console.clear();
    elementos(emojs, mostrar);


    if(elemento1 === elemento2) {
        console.log("\nEscolha cartas diferentes!");
        continue;
    }

    console.log("\nPrimeira carta:", emojs[elemento1 - 1]);
    console.log("Segunda carta:", emojs[elemento2 - 1]);

    if(emojs[elemento1 - 1] === emojs[elemento2 - 1]) {

        mostrar[elemento1 - 1] = true;
        mostrar[elemento2 - 1] = true;

        pares++;

        console.log("\n🎉 Parabéns! Acertou os pares.");

        if(pares === 8) {
            console.log("\n Você venceu o jogo!");
            break;
        }

    } else {

        erros++;

        console.log("\n❌ Infelizmente! Não são os pares.");
    }

    readlineSync.question(
        "\nPrima ENTER para continuar..."
    );

    mostrar[elemento1 - 1]= false
    mostrar[elemento2 - 1]= false
}

if(erros === 5) {
    console.log("\n Fim do jogo! Você atingiu 5 erros.");
}