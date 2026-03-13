const agora = new Date(); //ISO 8601
console.log(agora);
console.log("Ano:", agora.getFullYear());
console.log("Mês 0-11", agora.getMonth());


console.log("Data formatada (BR):", agora.toLocaleDateString("pt-BR"));

