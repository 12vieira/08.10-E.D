const prompt = require('prompt-sync')();

let soma = 0;
for (let i = 1; i <= 6; i++){
    let number = parseInt(prompt(`digite o número ${i}: `));
    soma += number;
}
console.log(`a soma é ${soma}`);