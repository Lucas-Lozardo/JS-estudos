let pessoa = {
    nome: "Camila",
    idade: 29,
    profissao: "dev"
}

//SPREAD OPERATOR ...
const pessoa2 = {...pessoa};

pessoa2.idade = 30;

console.log(pessoa);
console.log(pessoa2);


//sobrescrever e adicionar nova propriedade
pessoa = {
    ...pessoa2,
    profissao: "dev senior",
    possuiCNH: true
}

console.log(pessoa);

//REST OPERATOR serve para separar os objetos
const {nome, ...restante} = pessoa;
console.log(nome);
console.log(restante);
