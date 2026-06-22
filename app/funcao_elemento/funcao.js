

function elementos(emojs, mostrar) {

    for(let i = 0; i < emojs.length; i++) {

        if(mostrar[i]) {
            process.stdout.write(emojs[i] + "\t");
        } else {
            process.stdout.write((i + 1) + "\t");
        }

        if((i + 1) % 4 === 0) {
            console.log();
        }
    }
}

export default elementos;