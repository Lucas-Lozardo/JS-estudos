//Criacão de Array
const frutas = ["UVA", "BANANA", "MORANGO", "KIWI"];

//Acessar no console o array
console.log(frutas);

console.log("Quantidade de frutas:", frutas.length)

//Incluir no array
frutas.push("PERA");

console.log("Após adicionar uma fruta:", frutas);

//Apagar no array
frutas.splice(3, 1);

console.log("Após remover uma fruta: ", frutas);

console.log("Utilizando o For:")
for(let i=0; i<frutas.length; i++){
    console.log("Índice:", i, frutas[i]);
}

console.log("Utilizando o ForEach:")
frutas.forEach((fruta, indice) => {
    console.log("Índice:", indice, fruta);
})

console.log("Utilizando For Of:")
for(const fruta of frutas){
    console.log(fruta);
}