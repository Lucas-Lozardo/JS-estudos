const readline = require('readline');  //require é uma funcão global

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual o seu nome? ", (nome) => {
    console.log("Olá,", nome)

    leitor.close()
})
