const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = parseInt(prompt(`Digite a quantidade de números: `))
for (let i = 1; i <= quantidade; i++){
    let nota = parseInt(prompt(`digite o número ${i}: `));
    soma += nota;
    quociente = i;
}
let media = soma / quantidade;
console.log(`a média é ${media}`);