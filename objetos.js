const pessoa = {
    nome: "Ana",
    idade: 26,
    temCNH: true
}

console.log(pessoa);

//Adicionar nova chave (sobrenome) e valor (Paula).
pessoa.sobrenome = "Paula";

console.log("Adicionado novo campo (chave e valor):", pessoa);

//Para acessar
console.log("Nome:", pessoa.nome);
console.log("Sobrenome:", pessoa.sobrenome);

//Outra forma de acessar
console.log("Nome:", pessoa["nome"]);
console.log("Sobrenome:", pessoa["sobrenome"]);

//DELETAR
delete pessoa.sobrenome;
console.log(pessoa);

pessoa.idiomas = ["Português", "Inglês", "Alemão"];
console.log(pessoa);

delete pessoa.idiomas[2];
console.log(pessoa);