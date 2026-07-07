import readlineSync from "readline-sync";
import elementos from "../funcao_elemento/funcao.js";

const emojs = [
    "🌍", "🧭", "🌹", "🌼",
    "🏵️", "🎀", "👗", "🎁",
    "🌍", "🧭", "🌹", "🌼",
    "🏵️", "🎀", "👗", "🎁"
];

let mostrar = Array(16).fill(false);

let erros = 0;
let pares = 0;

while (erros < 5) {

    console.clear();

    console.log("Pares encontrados:", pares);
    console.log("Erros:", erros);
    console.log();

    elementos(emojs, mostrar);

    let elemento1 = readlineSync.questionInt(
        "\nEscolhe o primeiro numero entre 1 e 16: "
    );

    if (elemento1 < 1 || elemento1 > 16) {
        console.log("Número inválido!");
        readlineSync.question("Prima ENTER...");
        continue;
    }

    mostrar[elemento1 - 1] = true;

    console.clear();
    elementos(emojs, mostrar);

    let elemento2 = readlineSync.questionInt(
        "\nEscolhe o segundo numero entre 1 e 16: "
    );

    if (elemento2 < 1 || elemento2 > 16) {
        mostrar[elemento1 - 1] = false;
        console.log("Número inválido!");
        readlineSync.question("Prima ENTER...");
        continue;
    }

    if (elemento1 === elemento2) {
        mostrar[elemento1 - 1] = false;
        console.log("\nEscolha cartas diferentes!");
        readlineSync.question("Prima ENTER...");
        continue;
    }

    mostrar[elemento2 - 1] = true;

    console.clear();
    elementos(emojs, mostrar);

    console.log("\nPrimeira carta:", emojs[elemento1 - 1]);
    console.log("Segunda carta:", emojs[elemento2 - 1]);

    if (emojs[elemento1 - 1] === emojs[elemento2 - 1]) {

        pares++;

        console.log("\n🎉 Parabéns! Acertou o par.");

        if (pares === 8) {
            console.log("\n🏆 Você venceu o jogo!");
            break;
        }

    } else {

        erros++;

        console.log("\n❌ Não são um par.");
    }

    readlineSync.question("\nPrima ENTER para continuar...");

    // Esconde sempre as cartas
    mostrar[elemento1 - 1] = false;
    mostrar[elemento2 - 1] = false;
}

if (erros === 5) {
    console.log("\n💀 Fim do jogo! Você atingiu 5 erros.");
}