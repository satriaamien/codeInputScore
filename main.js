const prompt = require("prompt-sync")();
const convert = require("./src/challenge5");

const inputUser = prompt("Masukkan nilai yang akan di convert : ");
const result = convert(inputUser);
console.log(result);
