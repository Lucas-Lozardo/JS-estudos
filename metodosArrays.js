const numeros = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10];

console.log("Todos os números:", numeros);

//O FILTER cria um novo Array, ele não modifica o Array original.
const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
})

console.log("Todos os números pares:", numerosPares);

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 != 0;
})

console.log("Todos os números ímpares:", numerosImpares);

//O MAP cria um novo Array, ele não modifica o Array original.
const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
})

console.log("Utilizando MAP para dobrar os valores:", numerosDobrados)


//Abordagens de Tratamento, Método typeof
const mistura = [42, 'texto', true, { chave: 'valor' }, () => 'função'];

mistura.forEach(item => {
  if (typeof item === 'function') {
    console.log('Executando função:', item());
  } else {
    console.log('Item:', item);
  }
});



//Um Set é uma estrutura de dados que guarda valores únicos. 
// Pense nele como uma coleção onde nenhum valor pode se repetir, diferente dos arrays onde você pode ter elementos iguais.
let numerosComSet = new Set(); 

numerosComSet.add(1); 
numerosComSet.add(2); 
numerosComSet.add(2); // Não será adicionado novamente 

console.log(numerosComSet); // Resultado: Set { 1, 2 } 



let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5]; 

//O operador de espalhamento permite que você "espalhe" os elementos de um array ou de um objeto iterável em um novo array ou objeto.
//No caso específico ele está sendo usado para transformar o Set em um array.
let arraySemDuplicatas = [...new Set(arrayComDuplicatas)]; 

console.log(arraySemDuplicatas); // Resultado: [1, 2, 3, 4, 5] 


//MAP é uma estrutura que permite armazenar pares de chave e valor, semelhante a um objeto.
//Quando usar um Map?
//Para armazenar informações associadas a uma chave específica.
//Quando precisar manter a ordem de inserção.
//Para usar chaves que não sejam strings.
let mapa = new Map(); 

mapa.set('nome', 'João'); 
mapa.set('idade', 25); 


console.log(mapa.get('nome')); // Resultado: João 

console.log(mapa.get('idade')); // Resultado: 25 